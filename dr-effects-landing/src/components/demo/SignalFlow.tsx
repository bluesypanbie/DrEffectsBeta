'use client';

import { motion } from 'framer-motion';

interface SignalFlowProps {
  connections: string[][];
  isActive?: boolean;
  className?: string;
}

export default function SignalFlow({ 
  connections, 
  isActive = false,
  className = '' 
}: SignalFlowProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="w-full h-full">
        {connections.map((connection, index) => {
          // Simple horizontal line for demo - in real implementation,
          // you'd calculate actual positions of pedals
          const y = 60 + (index * 40);
          const startX = 100 + (index * 150);
          const endX = startX + 100;

          return (
            <motion.g key={`connection-${index}`}>
              {/* Connection Line */}
              <motion.line
                x1={startX}
                y1={y}
                x2={endX}
                y2={y}
                className={`signal-line ${isActive ? 'active' : ''}`}
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />
              
              {/* Signal Flow Animation */}
              {isActive && (
                <motion.circle
                  r="4"
                  className="fill-primary"
                  initial={{ cx: startX, cy: y }}
                  animate={{ cx: endX, cy: y }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.3,
                  }}
                />
              )}
              
              {/* Arrow */}
              <motion.polygon
                points={`${endX-8},${y-4} ${endX},${y} ${endX-8},${y+4}`}
                className={`fill-accent ${isActive ? 'fill-primary' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + (index * 0.2) }}
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}