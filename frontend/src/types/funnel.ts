// frontend/src/types/funnel.ts

export interface FunnelStep {
  step: string;
  headline?: string;
  offer?: string;
  product?: string;
  price?: string;
  emails?: string[];
  message?: string;
  description?: string;
  fields?: string[];
  conversionGoal?: string;
  topics?: string[];
  content?: string[];
}

export interface Funnel {
  title: string;
  steps: FunnelStep[];
}
