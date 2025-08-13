import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Question, UserResponse } from "@/types/assessment";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  currentResponse?: UserResponse;
  onResponse: (value: number, selectedOption?: string) => void;
}

export const QuestionCard = ({ question, currentResponse, onResponse }: QuestionCardProps) => {
  const renderLikertScale = () => {
    if (!question.scale) return null;

    const handleSliderChange = (value: number[]) => {
      onResponse(value[0]);
    };

    return (
      <div className="space-y-6">
        <p className="text-lg font-medium">{question.question}</p>
        
        <div className="px-4">
          <Slider
            value={[currentResponse?.value || 3]}
            onValueChange={handleSliderChange}
            min={question.scale.min}
            max={question.scale.max}
            step={1}
            className="w-full"
          />
          
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>{question.scale.minLabel}</span>
            <span>{question.scale.maxLabel}</span>
          </div>
        </div>

        {currentResponse && (
          <div className="text-center">
            <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
              {currentResponse.value} / {question.scale.max}
            </span>
          </div>
        )}
      </div>
    );
  };

  const renderMultipleChoice = () => {
    if (!question.options) return null;

    return (
      <div className="space-y-4">
        {question.scenario && (
          <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary mb-4">
            <p className="font-medium text-sm text-muted-foreground mb-2">Scenario:</p>
            <p className="text-sm">{question.scenario}</p>
          </div>
        )}
        
        <p className="text-lg font-medium">{question.question}</p>
        
        <div className="grid gap-3">
          {question.options.map((option) => (
            <Button
              key={option.id}
              variant="assessment"
              className={cn(
                "text-left justify-start h-auto p-4 whitespace-normal",
                currentResponse?.selectedOption === option.id && 
                "border-primary bg-primary/5 shadow-soft"
              )}
              onClick={() => onResponse(option.value, option.id)}
            >
              <div className="flex items-start gap-3 w-full">
                <span className="font-semibold text-primary mt-0.5">
                  {option.id.toUpperCase()}.
                </span>
                <span className="flex-1">{option.text}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const renderForcedChoice = () => {
    if (!question.options || question.options.length !== 2) return null;

    return (
      <div className="space-y-4">
        <p className="text-lg font-medium">{question.question}</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {question.options.map((option) => (
            <Card
              key={option.id}
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-soft",
                currentResponse?.selectedOption === option.id && 
                "border-primary shadow-medium bg-primary/5"
              )}
              onClick={() => onResponse(option.value, option.id)}
            >
              <CardContent className="p-6 text-center">
                <p className="font-medium">{option.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {question.type === 'likert' && renderLikertScale()}
      {question.type === 'multiple_choice' && renderMultipleChoice()}
      {question.type === 'scenario' && renderMultipleChoice()}
      {question.type === 'forced_choice' && renderForcedChoice()}
    </div>
  );
};