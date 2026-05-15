// Component Types
import { type ReactNode, type ElementType } from 'react';

interface Tool {
  name: string;
  description: string;
  icon?: ElementType;
}

interface Stage {
  title: string;
  color: string;
  tools: Tool[];
  description?: string;
  link?: string;
}

interface Phase {
  id: string;
  title: string;
  icon: ElementType;
  description: string;
  deliverables: Deliverable[];
  impact: string;
  color?: string;
  summary?: string;
}

interface Deliverable {
  name: string;
  description: string;
  items?: string[];
}

interface BusinessOpportunity {
  id: string;
  title: string;
  category: 'sidehustle' | 'localbusiness' | 'onlinebusiness' | 'platform';
  description: string;
  image: string;
  monthlyRevenue: string;
  setupTime: string;
  initialInvestment: string;
  attributes: {
    resilientPersistence: number;
    customerUnderstanding: number;
    calculatedRisks: number;
    selfStarting: number;
    financialDiscipline: number;
    strategicVision: number;
    adaptiveLearning: number;
    relationshipBuilding: number;
    problemSolving: number;
    effectiveCommunication: number;
  };
}

interface CategoryColors {
  [key: string]: string;
}

interface CategoryIcons {
  [key: string]: ElementType;
}

// State Types
interface ExpandedState {
  [key: string]: boolean;
}

interface FilterState {
  category: string | null;
  setupTime: string | null;
  revenueRange: [number, number];
  searchQuery: string;
}

// Props Types
interface PhaseButtonProps {
  phase: {
    icon: ElementType;
    label: string;
  };
  index: number;
  isActive: boolean;
  onClick: () => void;
}

interface PhaseContentProps {
  phase: Phase;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CarouselProps {
  children?: ReactNode;
  opts?: any;
  plugins?: any[];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: any) => void;
  className?: string;
}

interface CarouselItemProps {
  className?: string;
  children?: ReactNode;
}

interface CarouselContentProps {
  className?: string;
  children?: ReactNode;
}

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

interface TrendData {
  timeline: { date: string; value: number }[];
  avgInterest: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  trendPercentage: number;
}

interface Analysis {
  idea: string;
  sector: string;
  rank: number;
  totalIdeas: number;
  trendData: TrendData;
  insights: string[];
  relatedQueries: { query: string }[];
  relatedTopics: { topic: string }[];
  topCompetitors: {
    idea: string;
    rank: number;
    trendDirection: 'rising' | 'falling' | 'stable';
  }[];
}

interface Results {
  readiness: number;
  strengths: string[];
  gaps: string[];
  nextSteps: string[];
  timeline: {
    phase: string;
    duration: string;
    tasks: string[];
  }[];
  recommendations?: {
    businessModel: string;
    marketStrategy: string;
    resourceNeeds: string[];
    keyRisks: string[];
    successFactors: string[];
  };
}

export interface TurnkeyStartup {
  id: string;
  title: string;
  description: string;
  category: 'sidehustle' | 'mainstreet' | 'digital' | 'platform';
  image: string;
  startupCosts: {
    min: number;
    max: number;
  };
  monthlyIncome: {
    min: number;
    max: number;
  };
  attributes: {
    timeCommitment: string;
    skillLevel: string;
    location: string;
    scalability: number;
    riskLevel: string;
    resilientPersistence: number;
    customerUnderstanding: number;
    calculatedRisks: number;
    selfStarting: number;
    financialDiscipline: number;
    strategicVision: number;
    adaptiveLearning: number;
    relationshipBuilding: number;
    problemSolving: number;
    effectiveCommunication: number;
  };
  tags: string[];
}