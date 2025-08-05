'use client';

import { motion } from 'framer-motion';
import PedalCard from './PedalCard';
import { getFullSignalChain } from '@/lib/pedalboard';
import { Pedal } from '@/types';

interface PedalboardGridProps {
  highlightedPedals?: string[];
  showSpecs?: boolean;
  className?: string;
}

export default function PedalboardGrid({ 
  highlightedPedals = [], 
  showSpecs = false,
  className = '' 
}: PedalboardGridProps) {
  const fullChain = getFullSignalChain();
  
  // Define the 3x4 grid layout (right-to-left signal flow)
  // Position mapping: [row][col] = pedal position in signal chain
  const gridLayout = [
    [12, 11, 10, 9],   // Top row: SurfyBear Metal → Oceans 11 → Flashback 2 → CH-1
    [8, 7, 6, 5],      // Middle row: Micro Amp → BD-2 → TS808 → Blues Power  
    [4, 3, 2, 1]       // Bottom row: Texan Twang → Ego → RC Booster → PolyTune
  ];

  // Create position-to-pedal mapping
  const pedalMap = new Map<number, Pedal>();
  fullChain.forEach(pedal => {
    pedalMap.set(pedal.position, pedal);
  });

  // Generate signal flow connections (right-to-left, then down)
  const getConnections = () => {
    const connections: { from: number; to: number; type: 'horizontal' | 'vertical' }[] = [];
    
    // Bottom row: horizontal connections (right to left)
    connections.push({ from: 1, to: 2, type: 'horizontal' });
    connections.push({ from: 2, to: 3, type: 'horizontal' });
    connections.push({ from: 3, to: 4, type: 'horizontal' });
    
    // Bottom to middle: vertical connection
    connections.push({ from: 4, to: 5, type: 'vertical' });
    
    // Middle row: horizontal connections (left to right)
    connections.push({ from: 5, to: 6, type: 'horizontal' });
    connections.push({ from: 6, to: 7, type: 'horizontal' });
    connections.push({ from: 7, to: 8, type: 'horizontal' });
    
    // Middle to top: vertical connection
    connections.push({ from: 8, to: 9, type: 'vertical' });
    
    // Top row: horizontal connections (right to left)
    connections.push({ from: 9, to: 10, type: 'horizontal' });
    connections.push({ from: 10, to: 11, type: 'horizontal' });
    connections.push({ from: 11, to: 12, type: 'horizontal' });
    
    return connections;
  };

  const connections = getConnections();

  return (
    <div className={`relative max-w-6xl mx-auto ${className}`}>
      {/* Guitar Input */}
      <motion.div
        className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-accent text-background px-3 py-2 rounded-lg text-sm font-bold"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        🎸 Guitar In
      </motion.div>

      {/* 3x4 Pedalboard Grid */}
      <div className="grid grid-rows-3 gap-4 p-6 bg-surface/30 rounded-2xl border border-border">
        {gridLayout.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="grid grid-cols-4 gap-4">
            {row.map((position, colIndex) => {
              const pedal = pedalMap.get(position);
              if (!pedal) return <div key={`empty-${position}`} className="w-full h-32" />;
              
              const isHighlighted = highlightedPedals.includes(pedal.model) || 
                                  highlightedPedals.includes(pedal.brand) ||
                                  highlightedPedals.includes(position.toString());

              return (
                <motion.div
                  key={pedal.model}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: (rowIndex * 4 + colIndex) * 0.1,
                    duration: 0.5 
                  }}
                  className="relative"
                >
                  <PedalCard
                    pedal={pedal}
                    isHighlighted={isHighlighted}
                    showSpecs={showSpecs}
                    className="w-full h-32"
                  />
                  
                  {/* Position Number */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary text-background rounded-full flex items-center justify-center text-xs font-bold">
                    {position}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Signal Flow Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {connections.map((connection, index) => {
          const fromPedal = pedalMap.get(connection.from);
          const toPedal = pedalMap.get(connection.to);
          if (!fromPedal || !toPedal) return null;

          // Calculate positions based on grid layout
          const getGridPosition = (position: number) => {
            for (let row = 0; row < gridLayout.length; row++) {
              for (let col = 0; col < gridLayout[row].length; col++) {
                if (gridLayout[row][col] === position) {
                  return {
                    row,
                    col,
                    x: (col * 25) + 12.5, // Percentage positions
                    y: (row * 33.33) + 16.66
                  };
                }
              }
            }
            return { row: 0, col: 0, x: 0, y: 0 };
          };

          const fromPos = getGridPosition(connection.from);
          const toPos = getGridPosition(connection.to);

          if (connection.type === 'horizontal') {
            // Horizontal connection
            const y = `${fromPos.y}%`;
            const x1 = `${Math.min(fromPos.x, toPos.x) + 6}%`;
            const x2 = `${Math.max(fromPos.x, toPos.x) - 6}%`;

            return (
              <motion.g key={`connection-${index}`}>
                <motion.line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  className="signal-line"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1 + (index * 0.2), duration: 0.8 }}
                />
                {/* Arrow */}
                <motion.polygon
                  points={`${parseFloat(x2.replace('%', '')) - 1},${parseFloat(y.replace('%', '')) - 1} ${parseFloat(x2.replace('%', '')) + 1},${parseFloat(y.replace('%', ''))} ${parseFloat(x2.replace('%', '')) - 1},${parseFloat(y.replace('%', '')) + 1}`}
                  className="fill-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 + (index * 0.2) }}
                />
              </motion.g>
            );
          } else {
            // Vertical connection
            const x = `${fromPos.x}%`;
            const y1 = `${Math.min(fromPos.y, toPos.y) + 8}%`;
            const y2 = `${Math.max(fromPos.y, toPos.y) - 8}%`;

            return (
              <motion.g key={`connection-${index}`}>
                <motion.line
                  x1={x}
                  y1={y1}
                  x2={x}
                  y2={y2}
                  className="signal-line"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1 + (index * 0.2), duration: 0.8 }}
                />
                {/* Arrow */}
                <motion.polygon
                  points={`${parseFloat(x.replace('%', '')) - 1},${parseFloat(y2.replace('%', '')) + 1} ${parseFloat(x.replace('%', ''))},${parseFloat(y2.replace('%', '')) - 1} ${parseFloat(x.replace('%', '')) + 1},${parseFloat(y2.replace('%', '')) + 1}`}
                  className="fill-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 + (index * 0.2) }}
                />
              </motion.g>
            );
          }
        })}
      </svg>

      {/* Amp Output */}
      <motion.div
        className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-primary text-background px-3 py-2 rounded-lg text-sm font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
      >
        🔊 Amp Out
      </motion.div>
    </div>
  );
}