'use client';

import { motion } from 'framer-motion';
import { useDemo } from '../DemoContext';
import PedalboardGrid from '../PedalboardGrid';
import { getSRVPedalPositions } from '@/lib/pedalboard';

export default function SRVToneScenario() {
  const { state, dispatch } = useDemo();
  
  // Get actual SRV pedal positions
  const { initial, enhanced } = getSRVPedalPositions();

  const handleNextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const handlePreviousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  return (
    <div className="space-y-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-center space-x-2 mb-6">
        {[0, 1].map((step) => (
          <div
            key={step}
            className={`w-3 h-3 rounded-full transition-colors ${
              state.currentStep >= step ? 'bg-primary' : 'bg-border'
            }`}
          />
        ))}
      </div>

      {/* Step Content */}
      {state.currentStep === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Create Stevie Ray Vaughan Tone
            </h3>
            <p className="text-muted">
              Here's the classic SRV setup with Texas blues essentials
            </p>
          </div>

          {/* Complete Pedalboard Layout */}
          <PedalboardGrid 
            highlightedPedals={initial}
            className="mb-8"
          />

          {/* Action Button */}
          <div className="text-center mt-8">
            <motion.button
              className="bg-primary hover:bg-primary-dark text-background font-semibold px-6 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextStep}
            >
              Recommend Additional Effect
            </motion.button>
          </div>
        </motion.div>
      )}

      {state.currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Enhanced SRV Setup
            </h3>
            <p className="text-muted">
              Added compressor for that classic sustain and dynamics control
            </p>
          </div>

          {/* Enhanced Pedalboard Layout */}
          <PedalboardGrid 
            highlightedPedals={enhanced}
            className="mb-8"
          />

          {/* New Pedal Info */}
          <motion.div
            className="bg-surface border border-primary rounded-lg p-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-primary mb-2">
              Added: Wampler Ego Compressor
            </h4>
            <p className="text-sm text-muted mb-2">
              Perfect for SRV's dynamic playing style. Provides sustain without killing the natural attack.
            </p>
            <div className="text-xs text-muted">
              <span className="font-semibold">Controls:</span> Blend, Attack, Sustain, Tone, Volume
              <br />
              <span className="font-semibold">Power:</span> 9V-18V DC, 14mA @ 9V
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold px-6 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePreviousStep}
            >
              Previous Step
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}