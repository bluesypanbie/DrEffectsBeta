'use client';

import { motion } from 'framer-motion';
import { Pedal } from '@/types';

interface PedalCardProps {
  pedal: Pedal;
  isHighlighted?: boolean;
  showSpecs?: boolean;
  className?: string;
}

export default function PedalCard({ 
  pedal, 
  isHighlighted = false, 
  showSpecs = false,
  className = '' 
}: PedalCardProps) {
  return (
    <motion.div
      className={`
        relative bg-surface border-2 rounded-lg p-4 min-h-[120px] cursor-pointer
        transition-all duration-300 hover:scale-105
        ${isHighlighted 
          ? 'border-primary shadow-lg shadow-primary/25 glow' 
          : 'border-border hover:border-primary/50'
        }
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      {/* Pedal Header */}
      <div className="text-center mb-2">
        <h4 className="font-bold text-sm text-foreground">{pedal.brand}</h4>
        <p className="text-xs text-primary font-mono">{pedal.model}</p>
        <p className="text-xs text-muted">{pedal.type}</p>
      </div>

      {/* Basic Info */}
      <div className="text-center">
        <div className="text-xs text-muted mb-1">
          {pedal.power.split(' ')[0]} • {pedal.power_consumption}
        </div>
        <div className="text-xs font-semibold text-secondary">
          {pedal.price_range.split(' / ')[1] || pedal.price_range}
        </div>
      </div>

      {/* Expanded Specs */}
      {showSpecs && (
        <motion.div
          className="absolute top-0 left-0 right-0 bg-surface border-2 border-primary rounded-lg p-3 z-10 shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-xs space-y-1">
            <div className="font-bold text-primary">{pedal.brand} {pedal.model}</div>
            <div className="text-foreground">{pedal.description}</div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="text-muted">Power:</span>
                <span className="text-foreground ml-1">{pedal.power}</span>
              </div>
              <div>
                <span className="text-muted">Current:</span>
                <span className="text-foreground ml-1">{pedal.power_consumption}</span>
              </div>
              <div>
                <span className="text-muted">Origin:</span>
                <span className="text-foreground ml-1">{pedal.origin}</span>
              </div>
              <div>
                <span className="text-muted">Weight:</span>
                <span className="text-foreground ml-1">{pedal.weight}</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-muted">Controls:</span>
              <div className="text-foreground text-xs">
                {pedal.controls.join(', ')}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Highlight overlay */}
      {isHighlighted && (
        <motion.div
          className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(255, 107, 53, 0.4)',
              '0 0 0 10px rgba(255, 107, 53, 0)',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      )}
    </motion.div>
  );
}