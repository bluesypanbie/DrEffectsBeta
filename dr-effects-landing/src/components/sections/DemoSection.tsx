'use client';

import { motion } from 'framer-motion';
import { DemoProvider, useDemo } from '../demo/DemoContext';
import SRVToneScenario from '../demo/scenarios/SRVToneScenario';
import PowerManagementScenario from '../demo/scenarios/PowerManagementScenario';
import PresetScenario from '../demo/scenarios/PresetScenario';

const scenarios = [
  {
    id: 'srv-tone',
    title: 'SRV Tone',
    description: 'Create classic Texas blues setup',
    icon: '🎸',
  },
  {
    id: 'power-check',
    title: 'Power Check',
    description: 'Analyze electrical requirements',
    icon: '⚡',
  },
  {
    id: 'presets',
    title: 'Presets',
    description: 'Genre-specific recommendations',
    icon: '🎛️',
  },
];

function DemoContent() {
  const { state, dispatch } = useDemo();

  const handleScenarioSelect = (scenarioId: string) => {
    dispatch({ type: 'SELECT_SCENARIO', scenario: scenarioId });
  };

  const renderScenario = () => {
    switch (state.currentScenario) {
      case 'srv-tone':
        return <SRVToneScenario />;
      case 'power-check':
        return <PowerManagementScenario />;
      case 'presets':
        return <PresetScenario />;
      default:
        return null;
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Experience Dr.Effects
            <br />
            In Action
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Interactive demos with real pedal data and step-by-step AI guidance
          </p>
        </motion.div>

        {/* Scenario Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {scenarios.map((scenario, index) => (
            <motion.button
              key={scenario.id}
              className={`
                relative px-6 py-4 rounded-lg font-semibold transition-all duration-300
                ${state.currentScenario === scenario.id
                  ? 'bg-primary text-background shadow-lg shadow-primary/25'
                  : 'bg-surface text-foreground hover:bg-surface/80 border border-border hover:border-primary/50'
                }
              `}
              onClick={() => handleScenarioSelect(scenario.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{scenario.icon}</span>
                <div className="text-left">
                  <div className="font-bold">{scenario.title}</div>
                  <div className="text-sm opacity-80">{scenario.description}</div>
                </div>
              </div>

              {/* Active Tab Indicator */}
              {state.currentScenario === scenario.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-background rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Demo Content Area */}
        <motion.div
          className="min-h-[600px] bg-background/50 backdrop-blur-sm rounded-2xl border border-border p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {state.currentScenario ? (
            <motion.div
              key={state.currentScenario}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderScenario()}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-6">🎛️</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Choose a Demo Scenario
              </h3>
              <p className="text-muted text-lg">
                Select one of the scenarios above to see Dr.Effects in action
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Demo Features Summary */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            {
              icon: '🎯',
              title: 'Real Pedal Data',
              description: 'All demos use actual pedal specifications and real-world pricing'
            },
            {
              icon: '⚡',
              title: 'Interactive Experience',
              description: 'Step-by-step guidance with visual pedalboard updates'
            },
            {
              icon: '🔧',
              title: 'Professional Setups',
              description: '$2,500+ pedalboard configurations used by working musicians'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-surface/50 rounded-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + (index * 0.1) }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            className="bg-primary hover:bg-primary-dark text-background font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ready to Get Started?
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default function DemoSection() {
  return (
    <DemoProvider>
      <DemoContent />
    </DemoProvider>
  );
}