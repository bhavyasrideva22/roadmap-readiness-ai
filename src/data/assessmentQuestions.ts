import { Question } from "@/types/assessment";

export const assessmentQuestions: Question[] = [
  // Psychometric Section - Interest (Holland RIASEC)
  {
    id: "psych_interest_1",
    type: "likert",
    category: "psychometric",
    section: "Interest Assessment",
    question: "I enjoy organizing complex workflows into actionable plans",
    scale: {
      min: 1,
      max: 5,
      minLabel: "Strongly Disagree",
      maxLabel: "Strongly Agree"
    }
  },
  {
    id: "psych_interest_2",
    type: "likert",
    category: "psychometric",
    section: "Interest Assessment", 
    question: "I find satisfaction in aligning multiple projects with business objectives",
    scale: {
      min: 1,
      max: 5,
      minLabel: "Strongly Disagree",
      maxLabel: "Strongly Agree"
    }
  },
  {
    id: "psych_interest_3",
    type: "forced_choice",
    category: "psychometric",
    section: "Interest Assessment",
    question: "Which would you prefer?",
    options: [
      { id: "a", text: "Define strategy and roadmaps", value: 5 },
      { id: "b", text: "Execute and build products", value: 2 }
    ]
  },

  // Psychometric Section - Personality (Big Five)
  {
    id: "psych_personality_1",
    type: "likert",
    category: "psychometric",
    section: "Personality Assessment",
    question: "I am systematic and organized in my approach to work",
    scale: {
      min: 1,
      max: 5,
      minLabel: "Not at all like me",
      maxLabel: "Very much like me"
    }
  },
  {
    id: "psych_personality_2",
    type: "likert",
    category: "psychometric",
    section: "Personality Assessment",
    question: "I enjoy exploring new ideas and innovative approaches",
    scale: {
      min: 1,
      max: 5,
      minLabel: "Not at all like me",
      maxLabel: "Very much like me"
    }
  },
  {
    id: "psych_personality_3",
    type: "likert",
    category: "psychometric",
    section: "Personality Assessment",
    question: "I remain calm and composed when dealing with competing priorities",
    scale: {
      min: 1,
      max: 5,
      minLabel: "Not at all like me",
      maxLabel: "Very much like me"
    }
  },

  // Technical & Aptitude Section
  {
    id: "tech_aptitude_1",
    type: "multiple_choice",
    category: "technical",
    section: "Logical Reasoning",
    question: "A product roadmap shows 3 features planned for Q1, but the team can only deliver 2. Which prioritization approach is most appropriate?",
    options: [
      { id: "a", text: "First-in-first-out (FIFO)", value: 1 },
      { id: "b", text: "RICE framework (Reach, Impact, Confidence, Effort)", value: 5 },
      { id: "c", text: "Random selection", value: 0 },
      { id: "d", text: "Stakeholder preference only", value: 2 }
    ]
  },
  {
    id: "tech_aptitude_2", 
    type: "multiple_choice",
    category: "technical",
    section: "Data Interpretation",
    question: "If a team's velocity is 20 story points per sprint, and they have 100 story points remaining, how many sprints are needed?",
    options: [
      { id: "a", text: "4 sprints", value: 3 },
      { id: "b", text: "5 sprints", value: 5 },
      { id: "c", text: "6 sprints", value: 2 },
      { id: "d", text: "Cannot determine without more information", value: 1 }
    ]
  },

  // Domain-Specific Skills
  {
    id: "domain_skills_1",
    type: "multiple_choice",
    category: "domain",
    section: "Prioritization Frameworks",
    question: "In a resource-constrained environment, which prioritization model would be most effective?",
    options: [
      { id: "a", text: "MoSCoW (Must have, Should have, Could have, Won't have)", value: 4 },
      { id: "b", text: "WSJF (Weighted Shortest Job First)", value: 5 },
      { id: "c", text: "Alphabetical order", value: 0 },
      { id: "d", text: "Loudest stakeholder wins", value: 1 }
    ]
  },
  {
    id: "domain_skills_2",
    type: "scenario",
    category: "domain",
    section: "Strategic Alignment",
    scenario: "You're managing a portfolio of 5 products. The CEO wants to add a new high-priority initiative, but your teams are already at 100% capacity.",
    question: "What's your recommended approach?",
    options: [
      { id: "a", text: "Add the new initiative and let teams figure it out", value: 1 },
      { id: "b", text: "Conduct a capacity vs demand analysis and present trade-off options", value: 5 },
      { id: "c", text: "Refuse the request outright", value: 0 },
      { id: "d", text: "Hire more people immediately", value: 2 }
    ]
  },

  // WISCAR Framework Questions
  {
    id: "wiscar_will_1",
    type: "likert",
    category: "psychometric",
    section: "Drive & Motivation",
    question: "I consistently follow through on long-term strategic initiatives, even when they're complex",
    scale: {
      min: 1,
      max: 5,
      minLabel: "Never",
      maxLabel: "Always"
    }
  },
  {
    id: "wiscar_skill_1",
    type: "multiple_choice",
    category: "domain",
    section: "Tool Familiarity",
    question: "Which tools have you used for roadmapping or portfolio management?",
    options: [
      { id: "a", text: "Aha!, Productboard, or similar dedicated tools", value: 5 },
      { id: "b", text: "Jira, Azure DevOps, or development-focused tools", value: 4 },
      { id: "c", text: "Excel, Google Sheets, or basic tools", value: 2 },
      { id: "d", text: "None of the above", value: 0 }
    ]
  },
  {
    id: "wiscar_cognitive_1",
    type: "scenario",
    category: "aptitude",
    section: "Systems Thinking",
    scenario: "A delay in Product A's feature will impact the timeline for Product B, which affects the marketing campaign for Product C.",
    question: "What's the most important first step?",
    options: [
      { id: "a", text: "Fix Product A immediately", value: 2 },
      { id: "b", text: "Map out all dependencies and impact scenarios", value: 5 },
      { id: "c", text: "Inform stakeholders about the delay", value: 3 },
      { id: "d", text: "Reallocate resources from other projects", value: 1 }
    ]
  },
  {
    id: "wiscar_learn_1",
    type: "likert",
    category: "psychometric",
    section: "Learning Orientation",
    question: "I actively seek feedback and adjust my approach based on new information",
    scale: {
      min: 1,
      max: 5,
      minLabel: "Rarely",
      maxLabel: "Very Often"
    }
  }
];