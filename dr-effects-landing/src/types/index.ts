// Dr.Effects Landing Page Type Definitions

export interface Pedal {
  position: number;
  category: string;
  brand: string;
  model: string;
  type: string;
  description: string;
  features: string[];
  controls: string[];
  power: string;
  power_consumption: string;
  dimensions: string;
  weight: string;
  price_range: string;
  origin: string;
  notes: string;
}

export interface PedalboardConfiguration {
  name: string;
  description: string;
  signalChain: Pedal[];
  totalPowerConsumption: string;
  totalWeight: string;
  estimatedValue: string;
}

export interface DemoScenario {
  id: string;
  title: string;
  steps: DemoStep[];
}

export interface DemoStep {
  stepId: string;
  userInput: string;
  uiResponse: {
    canvas?: {
      effects?: string[];
      effectsAdded?: string[];
      connections?: string[][];
      animation?: string;
      highlight?: string[];
      powerSupplyAdded?: string;
    };
    effectsInfo?: EffectInfo[];
    presets?: Preset[];
  };
  description: string;
}

export interface EffectInfo {
  name: string;
  voltage: string;
  current: string;
  polarity: string;
}

export interface Preset {
  name: string;
  effects: Record<string, Record<string, number | string>>;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
}

// Demo state management
export interface DemoState {
  currentScenario: string | null;
  currentStep: number;
  selectedPedals: string[];
  highlightedPedals: string[];
  showingSpecs: boolean;
  activePreset: string | null;
}

export type DemoAction = 
  | { type: 'SELECT_SCENARIO'; scenario: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'RESET_DEMO' }
  | { type: 'TOGGLE_SPECS' }
  | { type: 'SELECT_PRESET'; preset: string };