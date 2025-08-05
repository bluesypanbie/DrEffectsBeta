import { sampleBoard } from '@/data/samplePedalboard.json';
import { Pedal } from '@/types';

// Get pedal by model name
export function getPedalByModel(modelName: string): Pedal | undefined {
  return sampleBoard.signalChain.find(pedal => 
    pedal.model.toLowerCase().includes(modelName.toLowerCase()) ||
    modelName.toLowerCase().includes(pedal.model.toLowerCase())
  );
}

// Get pedals by category
export function getPedalsByCategory(category: string): Pedal[] {
  return sampleBoard.signalChain.filter(pedal => 
    pedal.category.toLowerCase().includes(category.toLowerCase())
  );
}

// Get the full signal chain
export function getFullSignalChain(): Pedal[] {
  return sampleBoard.signalChain.sort((a, b) => a.position - b.position);
}

// Get pedal positions for SRV scenario
export function getSRVPedalPositions(): { initial: string[], enhanced: string[] } {
  // Based on the actual pedalboard layout:
  // Position 4: Texan Twang
  // Position 6: TS808  
  // Position 10: Flashback 2
  // Position 3: Ego Compressor
  
  const initial = ['4', '6', '10']; // Texan Twang, TS808, Flashback 2
  const enhanced = ['3', '4', '6', '10']; // Add Ego Compressor
  
  return { initial, enhanced };
}

// Get power consumption data for all pedals
export function getPowerConsumptionData(): Array<{
  name: string;
  voltage: string;
  current: string;
  polarity: string;
  consumption: number; // numerical value for calculations
}> {
  return sampleBoard.signalChain.map(pedal => ({
    name: pedal.model,
    voltage: pedal.power.split('(')[0].trim(),
    current: pedal.power_consumption,
    polarity: 'Center-Negative', // Standard for most pedals
    consumption: parseFloat(pedal.power_consumption.replace('mA', '').split(' ')[0])
  }));
}

// Get total power consumption
export function getTotalPowerConsumption(): number {
  const powerData = getPowerConsumptionData();
  return powerData.reduce((total, pedal) => total + pedal.consumption, 0);
}

// Get preset configurations
export function getPresetConfigurations() {
  return {
    'texas-blues': {
      name: 'Texas Blues (SRV Style)',
      description: 'Classic Stevie Ray Vaughan inspired setup',
      settings: [
        { 
          pedal: 'Texan Twang', 
          controls: { Volume: 3, Switch: 'Mid (Fat/Tube response)' } 
        },
        { 
          pedal: 'TS808', 
          controls: { Overdrive: 4, Tone: 6, Level: 5 } 
        },
        { 
          pedal: 'Flashback 2', 
          controls: { Feedback: 3, 'Delay Time': '350ms', Level: 4, Type: 'Analog' } 
        },
        { 
          pedal: 'SurfyBear Metal', 
          controls: { Dwell: 7, Mixer: 4, Tone: 5, Volume: 6 } 
        }
      ]
    },
    'rock-hard-rock': {
      name: 'Rock/Hard Rock',
      description: 'Powerful rock tones with clarity and punch',
      settings: [
        { 
          pedal: 'Blues Power', 
          controls: { Drive: 6, Bass: 5, Treble: 6, Volume: 7, Switch: 'Stock' } 
        },
        { 
          pedal: 'BD-2 Blues Driver', 
          controls: { Level: 6, Tone: 5, Drive: 7 } 
        },
        { 
          pedal: 'Micro Amp', 
          controls: { Gain: 5, Note: 'clean boost for leads' } 
        },
        { 
          pedal: 'CH-1 Super Chorus', 
          controls: { Rate: 4, Depth: 3, EQ: 6, 'E.Level': 3 } 
        }
      ]
    },
    'clean-jazz': {
      name: 'Clean/Jazz',
      description: 'Pristine clean tones with subtle enhancement',
      settings: [
        { 
          pedal: 'RC Booster', 
          controls: { Gain: 3, Treble: '+2dB', Bass: '+1dB', Volume: 5, Note: 'always-on transparent boost' } 
        },
        { 
          pedal: 'Ego Compressor', 
          controls: { Blend: 6, Attack: 4, Sustain: 3, Tone: 5, Volume: 5 } 
        },
        { 
          pedal: 'Oceans 11', 
          controls: { 'FX Level': 4, Time: 5, Tone: 6, Type: 'Hall' } 
        }
      ]
    }
  };
}