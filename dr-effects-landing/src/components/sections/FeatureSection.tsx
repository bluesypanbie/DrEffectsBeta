'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/features';

export default function FeatureSection() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
            variants={titleVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Everything You Need to
            <br />
            Perfect Your Sound
          </motion.h2>
          <motion.p
            className="text-xl text-muted max-w-2xl mx-auto"
            variants={titleVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            From gear analysis to tone recommendations
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group bg-surface border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary mt-6 group-hover:w-full transition-all duration-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See It In Action
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}