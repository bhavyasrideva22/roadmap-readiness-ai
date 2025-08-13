import { useState } from "react";
import { AssessmentIntro } from "@/components/assessment/AssessmentIntro";
import { AssessmentQuiz } from "@/components/assessment/AssessmentQuiz";
import { AssessmentResults } from "@/components/assessment/AssessmentResults";
import { UserResponse, AssessmentResult } from "@/types/assessment";
import { calculateAssessmentScore } from "@/utils/assessmentScoring";

type AssessmentStep = 'intro' | 'quiz' | 'results';

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState<AssessmentStep>('intro');
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const handleStartAssessment = () => {
    setCurrentStep('quiz');
  };

  const handleQuizComplete = (userResponses: UserResponse[]) => {
    setResponses(userResponses);
    const assessmentResults = calculateAssessmentScore(userResponses);
    setResults(assessmentResults);
    setCurrentStep('results');
  };

  const handleRestart = () => {
    setCurrentStep('intro');
    setResponses([]);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {currentStep === 'intro' && (
        <AssessmentIntro onStart={handleStartAssessment} />
      )}
      {currentStep === 'quiz' && (
        <AssessmentQuiz onComplete={handleQuizComplete} />
      )}
      {currentStep === 'results' && results && (
        <AssessmentResults 
          results={results} 
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Assessment;