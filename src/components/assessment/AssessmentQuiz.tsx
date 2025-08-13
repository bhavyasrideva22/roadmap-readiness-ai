import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { QuestionCard } from "./QuestionCard";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { UserResponse } from "@/types/assessment";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AssessmentQuizProps {
  onComplete: (responses: UserResponse[]) => void;
}

export const AssessmentQuiz = ({ onComplete }: AssessmentQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const totalQuestions = assessmentQuestions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex]);

  const handleResponse = (value: number, selectedOption?: string) => {
    const timeSpent = Date.now() - questionStartTime;
    
    const response: UserResponse = {
      questionId: currentQuestion.id,
      value,
      selectedOption,
      timeSpent
    };

    const updatedResponses = [...responses];
    const existingIndex = updatedResponses.findIndex(r => r.questionId === currentQuestion.id);
    
    if (existingIndex >= 0) {
      updatedResponses[existingIndex] = response;
    } else {
      updatedResponses.push(response);
    }
    
    setResponses(updatedResponses);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(responses);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getCurrentResponse = () => {
    return responses.find(r => r.questionId === currentQuestion.id);
  };

  const isAnswered = getCurrentResponse() !== undefined;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </Badge>
          <Badge variant="outline">
            {currentQuestion.section}
          </Badge>
        </div>
        
        <Progress value={progress} className="h-2 mb-4" />
        
        <div className="text-sm text-muted-foreground text-center">
          {Math.round(progress)}% Complete
        </div>
      </div>

      <Card className="bg-gradient-card shadow-medium mb-6">
        <CardHeader>
          <CardTitle className="text-lg">
            {currentQuestion.section}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <QuestionCard
            question={currentQuestion}
            currentResponse={getCurrentResponse()}
            onResponse={handleResponse}
          />
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="text-sm text-muted-foreground">
          {isAnswered ? "Answer recorded" : "Please select an answer"}
        </div>

        <Button
          onClick={handleNext}
          disabled={!isAnswered}
          variant={currentQuestionIndex === totalQuestions - 1 ? "gradient" : "default"}
          className="flex items-center gap-2"
        >
          {currentQuestionIndex === totalQuestions - 1 ? "Complete Assessment" : "Next"}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};