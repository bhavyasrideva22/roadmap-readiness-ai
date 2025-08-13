import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Users, TrendingUp, ArrowRight, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-6">
          Professional Career Assessment
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Discover Your Perfect
          <br />
          Career Path
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Take our comprehensive assessment to discover if Roadmap & Portfolio Management 
          is the right career path for you. Get personalized insights, skill gap analysis, 
          and a complete roadmap for your professional growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/assessment">
            <Button variant="gradient" size="xl" className="shadow-strong">
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" size="xl">
            Learn More
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            20-25 minutes
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            No registration required
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Instant results
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Assessment Framework</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our scientifically-backed assessment evaluates multiple dimensions to give you accurate career guidance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Psychometric Analysis</CardTitle>
              <CardDescription>
                Personality traits, interests, and motivational drivers using validated frameworks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Big Five personality assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Holland interest codes (RIASEC)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Growth mindset evaluation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Technical Evaluation</CardTitle>
              <CardDescription>
                Skills, knowledge, and aptitude for portfolio management roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Logical reasoning and problem-solving
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Domain-specific knowledge
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Tool familiarity assessment
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle>WISCAR Framework</CardTitle>
              <CardDescription>
                Comprehensive evaluation of Will, Interest, Skill, Cognitive ability, and Real-world alignment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Holistic career readiness
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Personalized development plan
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Learning pathway recommendations
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="bg-gradient-card shadow-strong border-primary/20 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Discover Your Career Path?</CardTitle>
            <CardDescription className="text-lg">
              Join thousands of professionals who have found their perfect fit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/assessment">
              <Button variant="gradient" size="xl" className="shadow-strong">
                Take the Assessment Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-4">
              Free • No email required • Instant results
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
