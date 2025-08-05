'use client';

import { motion } from 'framer-motion';
import { useDemo } from '../DemoContext';
import PedalboardGrid from '../PedalboardGrid';
import { getPowerConsumptionData, getTotalPowerConsumption } from '@/lib/pedalboard';

export default function PowerManagementScenario() {
  const { state, dispatch } = useDemo();

  // Get actual power data from the real pedalboard
  const pedalSpecs = getPowerConsumptionData();
  const totalConsumption = getTotalPowerConsumption();

  const handleToggleSpecs = () => {
    dispatch({ type: 'TOGGLE_SPECS' });
  };

  const handleNextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const handlePreviousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  // Total consumption is already calculated
  const totalCurrent = totalConsumption;

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
              Check Electrical Information
            </h3>
            <p className="text-muted">
              Review power requirements for each effect pedal
            </p>
          </div>

          {/* Complete Pedalboard with Power Specs */}
          <PedalboardGrid 
            highlightedPedals={[]} // No specific highlights, show power info for all
            showSpecs={true}
            className="mb-8"
          />

          {/* Total Power Summary */}
          <motion.div
            className="bg-surface border border-accent rounded-lg p-4 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h4 className="text-lg font-bold text-accent mb-2 text-center">
              Total Power Requirements
            </h4>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                ~{Math.round(totalCurrent * 10) / 10}mA
              </div>
              <div className="text-sm text-muted">
                Combined current consumption
              </div>
              <div className="text-xs text-muted mt-2">
                Special: SurfyBear needs 12V output
              </div>
            </div>
          </motion.div>

          {/* Action Button */}
          <div className="text-center mt-8">
            <motion.button
              className="bg-primary hover:bg-primary-dark text-background font-semibold px-6 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextStep}
            >
              Recommend Power Supply
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
              Recommended Power Supply
            </h3>
            <p className="text-muted">
              Perfect power solution for your complete pedalboard
            </p>
          </div>

          {/* Power Supply Recommendation */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-surface border-2 border-primary rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Power Supply Info */}
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    Voodoo Lab Pedal Power 3 Plus
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">Total Outputs:</span>
                      <span className="text-foreground">8 isolated outputs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">9V Outputs:</span>
                      <span className="text-foreground">6 × 500mA max</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">12V Output:</span>
                      <span className="text-foreground">1 × 500mA max</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">18V Output:</span>
                      <span className="text-foreground">1 × 500mA max</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2 mt-3">
                      <span className="text-muted font-semibold">Total Capacity:</span>
                      <span className="text-primary font-bold">3000mA</span>
                    </div>
                  </div>
                </div>

                {/* Power Analysis */}
                <div>
                  <h5 className="text-lg font-bold text-accent mb-3">
                    Power Analysis
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">Your Total Need:</span>
                      <span className="text-secondary">{Math.round(totalCurrent * 10) / 10}mA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Available Capacity:</span>
                      <span className="text-foreground">3000mA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Headroom:</span>
                      <span className="text-accent">{Math.round((3000 - totalCurrent) * 10) / 10}mA</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/30 rounded p-2 mt-3">
                      <div className="text-primary font-semibold text-xs">
                        ✓ Perfect Match!
                      </div>
                      <div className="text-xs text-muted">
                        Plenty of headroom for future expansion
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div className="mt-6 pt-4 border-t border-border">
                <h6 className="font-semibold text-foreground mb-2">Special Considerations:</h6>
                <ul className="text-sm text-muted space-y-1">
                  <li>• SurfyBear Metal uses dedicated 12V output</li>
                  <li>• All outputs are isolated to prevent ground loops</li>
                  <li>• Includes all necessary power cables</li>
                  <li>• Compact design fits under most pedalboards</li>
                </ul>
              </div>
            </motion.div>
          </div>

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