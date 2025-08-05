'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const fadeUpVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pedalVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-surface overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Your AI Guitar
            <br />
            Effects Assistant
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Discover perfect pedal combinations, get personalized recommendations, 
            and create your signature sound with AI-powered guidance.
          </motion.p>

          {/* Interactive Pedalboard Preview */}
          <motion.div
            className="mb-12"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {/* Sample Pedals */}
              {[
                { name: 'Tuner', color: 'border-accent' },
                { name: 'Overdrive', color: 'border-primary' },
                { name: 'Delay', color: 'border-secondary' },
                { name: 'Reverb', color: 'border-accent' },
              ].map((pedal, index) => (
                <motion.div
                  key={pedal.name}
                  className={`relative bg-surface ${pedal.color} border-2 rounded-lg p-4 w-20 h-16 md:w-24 md:h-20 flex items-center justify-center cursor-pointer hover:glow transition-all duration-300`}
                  variants={pedalVariants}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-xs font-mono text-center text-foreground">
                    {pedal.name}
                  </div>
                  {index < 3 && (
                    <svg 
                      className="absolute -right-6 top-1/2 transform -translate-y-1/2 signal-line"
                      width="24" 
                      height="2"
                    >
                      <line x1="0" y1="1" x2="24" y2="1" className="signal-line" />
                    </svg>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <motion.button
              className="bg-primary hover:bg-primary-dark text-background font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try Demo
            </motion.button>
            <motion.button
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Tone Journey
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
          >
            <motion.div
              className="cursor-pointer text-muted hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDownIcon className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}