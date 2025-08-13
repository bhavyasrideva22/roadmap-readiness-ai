import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AssessmentResult } from "@/types/assessment";
import { 
  TrendingUp, 
  Target, 
  Award, 
  BookOpen, 
  Users, 
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AssessmentResultsProps {
  results: AssessmentResult;
  onRestart: () => void;
}

export const AssessmentResults = ({ results, onRestart }: AssessmentResultsProps) => {
  const { scores, strengths, gapAreas, nextSteps, careerPaths, learningReadiness } = results;

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'yes': return 'text-success';
      case 'maybe': return 'text-warning';
      case 'no': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'yes': return <CheckCircle className="h-6 w-6" />;
      case 'maybe': return <AlertTriangle className="h-6 w-6" />;
      case 'no': return <XCircle className="h-6 w-6" />;
      default: return null;
    }
  };

  const getRecommendationText = (recommendation: string) => {
    switch (recommendation) {
      case 'yes': return 'Strong Fit - Pursue This Career Path';
      case 'maybe': return 'Potential Fit - Address Development Areas';
      case 'no': return 'Low Fit - Explore Alternative Paths';
      default: return '';
    }
  };

  const getLearningReadinessColor = (readiness: string) => {
    switch (readiness) {
      case 'green': return 'text-success';
      case 'yellow': return 'text-warning';
      case 'red': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">
          Assessment Complete
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Your Assessment Results</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive analysis of your fit for Roadmap & Portfolio Management
        </p>
      </div>

      {/* Overall Score Card */}
      <Card className="mb-8 bg-gradient-card shadow-strong border-primary/20">
        <CardHeader className="text-center">
          <div className={cn("flex items-center justify-center gap-3 mb-4", getRecommendationColor(scores.recommendation))}>
            {getRecommendationIcon(scores.recommendation)}
            <CardTitle className="text-2xl">
              {getRecommendationText(scores.recommendation)}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{scores.overallScore}%</div>
              <div className="text-sm text-muted-foreground">Overall Fit Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{scores.confidenceScore}%</div>
              <div className="text-sm text-muted-foreground">Confidence Level</div>
            </div>
            <div className="text-center">
              <div className={cn("text-3xl font-bold mb-2", getLearningReadinessColor(learningReadiness))}>
                {learningReadiness === 'green' ? '✓' : learningReadiness === 'yellow' ? '⚠' : '✗'}
              </div>
              <div className="text-sm text-muted-foreground">Learning Readiness</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Score Breakdown */}
        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Score Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Psychometric Fit</span>
                <span className="font-medium">{scores.psychometricFit}%</span>
              </div>
              <Progress value={scores.psychometricFit} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Technical Score</span>
                <span className="font-medium">{scores.technicalScore}%</span>
              </div>
              <Progress value={scores.technicalScore} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* WISCAR Analysis */}
        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              WISCAR Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(scores.wiscar).map(([key, value]) => (
              <div key={key}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="font-medium">{value}%</span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Strengths */}
        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success">
              <Award className="h-5 w-5" />
              Your Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Gap Areas */}
        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <Lightbulb className="h-5 w-5" />
              Development Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {gapAreas.length > 0 ? (
              <ul className="space-y-2">
                {gapAreas.map((gap, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{gap}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                No major development areas identified. Great work!
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Career Paths */}
        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recommended Career Paths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {careerPaths.map((path, index) => (
                <Badge key={index} variant="secondary" className="mr-2 mb-2">
                  {path}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              {nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button 
          onClick={onRestart}
          variant="outline"
          size="lg"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Take Assessment Again
        </Button>
      </div>
    </div>
  );
};