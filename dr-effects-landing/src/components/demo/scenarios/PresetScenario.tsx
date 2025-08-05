'use client';

import { motion } from 'framer-motion';
import { useDemo } from '../DemoContext';
import PedalboardGrid from '../PedalboardGrid';
import { getPresetConfigurations } from '@/lib/pedalboard';

export default function PresetScenario() {
  const { state, dispatch } = useDemo();

  // Get actual preset configurations from the real pedalboard
  const presetConfigs = getPresetConfigurations();
  
  const presets = [
    {
      id: 'texas-blues',
      ...presetConfigs['texas-blues'],
      color: 'from-orange-500 to-red-500',
      highlights: ['4', '6', '10', '12'] // Texan Twang, TS808, Flashback, SurfyBear
    },
    {
      id: 'rock-hard-rock',
      ...presetConfigs['rock-hard-rock'],
      color: 'from-red-500 to-pink-500',
      highlights: ['5', '7', '8', '9'] // Blues Power, BD-2, Micro Amp, CH-1
    },
    {
      id: 'clean-jazz',
      ...presetConfigs['clean-jazz'],
      color: 'from-blue-500 to-teal-500',
      highlights: ['2', '3', '11'] // RC Booster, Ego Compressor, Oceans 11
    },
  ];

  const handleSelectPreset = (presetId: string) => {
    dispatch({ type: 'SELECT_PRESET', preset: presetId });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-2">
          Preset Recommendations
        </h3>
        <p className="text-muted text-lg">
          Genre-specific settings for your pedalboard
        </p>
      </div>

      {/* Preset Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {presets.map((preset, index) => (
          <motion.div
            key={preset.id}
            className={`
              relative bg-surface border-2 rounded-xl p-6 cursor-pointer
              transition-all duration-300 hover:scale-105
              ${state.activePreset === preset.id 
                ? 'border-primary shadow-lg shadow-primary/25' 
                : 'border-border hover:border-primary/50'
              }
            `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => handleSelectPreset(preset.id)}
            whileHover={{ y: -5 }}
          >
            {/* Preset Header */}
            <div className="mb-4">
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${preset.color} mb-4`} />
              <h4 className="text-xl font-bold text-foreground mb-2">
                {preset.name}
              </h4>
              <p className="text-sm text-muted">
                {preset.description}
              </p>
            </div>

            {/* Settings Preview */}
            <div className="space-y-3">
              {preset.settings.slice(0, 2).map((setting, settingIndex) => (
                <div key={settingIndex} className="bg-background/50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-accent mb-1">
                    {setting.pedal}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(setting.controls).slice(0, 3).map(([control, value]) => (
                      <div key={control} className="text-xs">
                        <span className="text-muted">{control}:</span>
                        <span className="text-foreground ml-1 font-mono">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {preset.settings.length > 2 && (
                <div className="text-xs text-muted text-center">
                  +{preset.settings.length - 2} more pedals...
                </div>
              )}
            </div>

            {/* Selected Indicator */}
            {state.activePreset === preset.id && (
              <motion.div
                className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Pedalboard Visualization */}
      <PedalboardGrid 
        highlightedPedals={state.activePreset ? presets.find(p => p.id === state.activePreset)?.highlights || [] : []}
        className="mb-8"
      />

      {/* Detailed Settings */}
      {state.activePreset && (
        <motion.div
          className="max-w-4xl mx-auto bg-surface border border-primary rounded-xl p-6 mt-8"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
        >
          {(() => {
            const selectedPreset = presets.find(p => p.id === state.activePreset);
            if (!selectedPreset) return null;

            return (
              <>
                <h4 className="text-2xl font-bold text-primary mb-4">
                  {selectedPreset.name} - Detailed Settings
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedPreset.settings.map((setting, index) => (
                    <motion.div
                      key={index}
                      className="bg-background/30 rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h5 className="font-bold text-accent mb-3">
                        {setting.pedal}
                      </h5>
                      
                      {/* Knob Controls Visualization */}
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(setting.controls).map(([control, value]) => (
                          <div key={control} className="flex items-center space-x-2">
                            {/* Virtual Knob */}
                            <div className="relative w-8 h-8 bg-muted rounded-full border-2 border-accent">
                              <div 
                                className="absolute top-0 left-1/2 w-0.5 h-3 bg-primary transform -translate-x-1/2"
                                style={{
                                  transformOrigin: 'bottom',
                                  transform: `translateX(-50%) rotate(${
                                    typeof value === 'number' ? (value * 30 - 150) : 0
                                  }deg)`
                                }}
                              />
                            </div>
                            
                            <div className="flex-1">
                              <div className="text-xs text-muted">{control}</div>
                              <div className="text-sm font-mono text-foreground">{value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <h6 className="font-semibold text-primary mb-2">💡 Pro Tips:</h6>
                  <ul className="text-sm text-muted space-y-1">
                    <li>• Start with these settings and adjust to taste</li>
                    <li>• Guitar volume knob affects overall tone character</li>
                    <li>• Room acoustics will influence reverb and delay settings</li>
                    <li>• Experiment with pickup selector for different textures</li>
                  </ul>
                </div>
              </>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
}