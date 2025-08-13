import { UserResponse, AssessmentScore, AssessmentResult } from "@/types/assessment";

export function calculateAssessmentScore(responses: UserResponse[]): AssessmentResult {
  // Group responses by category
  const psychometricResponses = responses.filter(r => 
    r.questionId.startsWith('psych_') || r.questionId.startsWith('wiscar_')
  );
  const technicalResponses = responses.filter(r => 
    r.questionId.startsWith('tech_') || r.questionId.startsWith('domain_')
  );
  
  // Calculate psychometric fit (average of personality and interest scores)
  const psychometricFit = Math.round(
    (psychometricResponses.reduce((sum, r) => sum + r.value, 0) / psychometricResponses.length) * 20
  );
  
  // Calculate technical score
  const technicalScore = Math.round(
    (technicalResponses.reduce((sum, r) => sum + r.value, 0) / (technicalResponses.length * 5)) * 100
  );
  
  // Calculate WISCAR scores
  const willScore = Math.round(getWiscarScore(responses, 'will') * 20);
  const interestScore = Math.round(getWiscarScore(responses, 'interest') * 20);
  const skillScore = Math.round(getWiscarScore(responses, 'skill') * 20);
  const cognitiveScore = Math.round(getWiscarScore(responses, 'cognitive') * 20);
  const learnScore = Math.round(getWiscarScore(responses, 'learn') * 20);
  const realWorldScore = Math.round((psychometricFit + technicalScore) / 2);
  
  const wiscar = {
    will: willScore,
    interest: interestScore,
    skill: skillScore,
    cognitive: cognitiveScore,
    abilityToLearn: learnScore,
    realWorldAlignment: realWorldScore
  };
  
  // Calculate overall score (weighted average)
  const overallScore = Math.round(
    (psychometricFit * 0.3 + technicalScore * 0.4 + 
     (willScore + interestScore + skillScore + cognitiveScore + learnScore) / 5 * 0.3)
  );
  
  // Determine recommendation
  let recommendation: 'yes' | 'maybe' | 'no';
  if (overallScore >= 70) recommendation = 'yes';
  else if (overallScore >= 50) recommendation = 'maybe';
  else recommendation = 'no';
  
  const scores: AssessmentScore = {
    psychometricFit,
    technicalScore,
    wiscar,
    overallScore,
    recommendation,
    confidenceScore: Math.min(overallScore + 10, 100)
  };
  
  // Generate insights
  const strengths = generateStrengths(scores);
  const gapAreas = generateGapAreas(scores);
  const nextSteps = generateNextSteps(scores);
  const careerPaths = generateCareerPaths(scores);
  const learningReadiness = determineLearningReadiness(scores);
  
  return {
    scores,
    strengths,
    gapAreas,
    nextSteps,
    careerPaths,
    learningReadiness
  };
}

function getWiscarScore(responses: UserResponse[], category: string): number {
  const categoryResponses = responses.filter(r => r.questionId.includes(category));
  if (categoryResponses.length === 0) return 3; // Default middle score
  
  return categoryResponses.reduce((sum, r) => sum + r.value, 0) / categoryResponses.length;
}

function generateStrengths(scores: AssessmentScore): string[] {
  const strengths: string[] = [];
  
  if (scores.wiscar.will >= 80) strengths.push("Strong drive for strategic initiatives");
  if (scores.wiscar.interest >= 80) strengths.push("Natural interest in portfolio management");
  if (scores.wiscar.skill >= 80) strengths.push("Solid technical foundation");
  if (scores.wiscar.cognitive >= 80) strengths.push("Excellent systems thinking ability");
  if (scores.wiscar.abilityToLearn >= 80) strengths.push("High learning agility");
  if (scores.psychometricFit >= 80) strengths.push("Strong personality fit for the role");
  if (scores.technicalScore >= 80) strengths.push("Advanced technical competency");
  
  if (strengths.length === 0) {
    strengths.push("Shows potential with focused development");
  }
  
  return strengths;
}

function generateGapAreas(scores: AssessmentScore): string[] {
  const gaps: string[] = [];
  
  if (scores.wiscar.skill < 60) gaps.push("Portfolio management frameworks and tools");
  if (scores.technicalScore < 60) gaps.push("Technical knowledge and domain expertise");
  if (scores.wiscar.cognitive < 60) gaps.push("Systems thinking and strategic analysis");
  if (scores.wiscar.will < 60) gaps.push("Sustained motivation for complex initiatives");
  if (scores.psychometricFit < 60) gaps.push("Personality alignment with role requirements");
  
  return gaps;
}

function generateNextSteps(scores: AssessmentScore): string[] {
  const steps: string[] = [];
  
  if (scores.recommendation === 'yes') {
    steps.push("Enroll in Portfolio Management Foundations course");
    steps.push("Join PMO community forums and networking groups");
    steps.push("Start managing small internal strategic initiatives");
    steps.push("Get certified in prioritization frameworks (RICE, WSJF)");
  } else if (scores.recommendation === 'maybe') {
    steps.push("Address identified gap areas through targeted learning");
    steps.push("Gain experience with roadmapping tools (Aha!, Productboard)");
    steps.push("Shadow experienced portfolio managers");
    steps.push("Complete strategic thinking assessment");
  } else {
    steps.push("Explore Business Analyst or Product Owner roles first");
    steps.push("Develop foundational product management skills");
    steps.push("Consider project coordinator or program assistant positions");
    steps.push("Build experience in cross-functional collaboration");
  }
  
  return steps;
}

function generateCareerPaths(scores: AssessmentScore): string[] {
  const paths: string[] = [];
  
  if (scores.recommendation === 'yes') {
    paths.push("Product Portfolio Manager");
    paths.push("Roadmap Manager");
    paths.push("Strategic PMO Lead");
    paths.push("Program Strategy Lead");
    paths.push("Capacity Planning Manager");
  } else if (scores.recommendation === 'maybe') {
    paths.push("Business Operations Manager");
    paths.push("Product Strategy Analyst");
    paths.push("Program Coordinator");
    paths.push("Project Manager");
  } else {
    paths.push("Business Analyst");
    paths.push("Customer Insights Manager");
    paths.push("Agile Coach");
    paths.push("Product Owner");
  }
  
  return paths;
}

function determineLearningReadiness(scores: AssessmentScore): 'green' | 'yellow' | 'red' {
  if (scores.wiscar.abilityToLearn >= 70 && scores.psychometricFit >= 60) return 'green';
  if (scores.wiscar.abilityToLearn >= 50) return 'yellow';
  return 'red';
}