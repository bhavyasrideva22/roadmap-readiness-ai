import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Users, TrendingUp, Award, CheckCircle } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">
          Career Assessment
        </Badge>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Is Roadmap & Portfolio Management the Right Career Path for You?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover if you have the skills, mindset, and passion to excel in strategic product portfolio management
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              What is Portfolio Management?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The strategic practice of planning, prioritizing, and managing a portfolio of programs or products based on resources, risk, ROI, and strategic alignment. It's the bridge between product execution and executive vision.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Typical Career Paths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Roadmap Manager
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Product Portfolio Manager
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Strategic Program Manager
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Head of Product Strategy
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 bg-gradient-card shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Who Succeeds in This Role?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Key Traits:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Systems thinking</li>
                <li>• Business acumen</li>
                <li>• Strategic mindset</li>
                <li>• Detail orientation</li>
                <li>• High tolerance for ambiguity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Essential Skills:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Roadmapping tools (Aha!, Productboard)</li>
                <li>• Prioritization frameworks (RICE, WSJF)</li>
                <li>• Capacity planning</li>
                <li>• Cross-functional communication</li>
                <li>• Stakeholder management</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Assessment Overview
          </CardTitle>
          <CardDescription>
            This comprehensive evaluation takes approximately 20-25 minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-background/50">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">Psychometric</h4>
              <p className="text-xs text-muted-foreground">Personality & interests</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">Technical</h4>
              <p className="text-xs text-muted-foreground">Skills & knowledge</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">WISCAR</h4>
              <p className="text-xs text-muted-foreground">Comprehensive evaluation</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button 
          onClick={onStart}
          variant="gradient"
          size="xl"
          className="shadow-strong"
        >
          Start Assessment
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          No registration required • Free assessment • Instant results
        </p>
      </div>
    </div>
  );
};