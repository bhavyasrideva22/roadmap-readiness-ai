export interface QuestionOption {
  id: string;
  text: string;
  value: number;
}

export interface Question {
  id: string;
  type: 'likert' | 'multiple_choice' | 'scenario' | 'forced_choice';
  category: 'psychometric' | 'technical' | 'aptitude' | 'domain';
  section: string;
  question: string;
  options?: QuestionOption[];
  scale?: {
    min: number;
    max: number;
    minLabel: string;
    maxLabel: string;
  };
  scenario?: string;
}

export interface UserResponse {
  questionId: string;
  value: number;
  selectedOption?: string;
  timeSpent: number;
}

export interface AssessmentScore {
  psychometricFit: number;
  technicalScore: number;
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    abilityToLearn: number;
    realWorldAlignment: number;
  };
  overallScore: number;
  recommendation: 'yes' | 'maybe' | 'no';
  confidenceScore: number;
}

export interface AssessmentResult {
  scores: AssessmentScore;
  strengths: string[];
  gapAreas: string[];
  nextSteps: string[];
  careerPaths: string[];
  learningReadiness: 'green' | 'yellow' | 'red';
}