'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { DemoState, DemoAction } from '@/types';

// Initial state
const initialState: DemoState = {
  currentScenario: null,
  currentStep: 0,
  selectedPedals: [],
  highlightedPedals: [],
  showingSpecs: false,
  activePreset: null,
};

// Reducer function
function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'SELECT_SCENARIO':
      return {
        ...state,
        currentScenario: action.scenario,
        currentStep: 0,
        selectedPedals: [],
        highlightedPedals: [],
        showingSpecs: false,
        activePreset: null,
      };
    
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    
    case 'PREVIOUS_STEP':
      return {
        ...state,
        currentStep: Math.max(0, state.currentStep - 1),
      };
    
    case 'RESET_DEMO':
      return initialState;
    
    case 'TOGGLE_SPECS':
      return {
        ...state,
        showingSpecs: !state.showingSpecs,
      };
    
    case 'SELECT_PRESET':
      return {
        ...state,
        activePreset: action.preset,
      };
    
    default:
      return state;
  }
}

// Context
const DemoContext = createContext<{
  state: DemoState;
  dispatch: React.Dispatch<DemoAction>;
} | undefined>(undefined);

// Provider component
export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(demoReducer, initialState);

  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      {children}
    </DemoContext.Provider>
  );
}

// Custom hook
export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}