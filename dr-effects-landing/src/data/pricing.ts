import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0/month',
    features: [
      'Limited AI recommendations (5 per day)',
      'Basic gear registration',
      'Community preset viewing',
      'Standard support'
    ],
    ctaText: 'Start Free'
  },
  {
    name: 'Plus',
    price: '$5.90/month',
    features: [
      'Unlimited AI recommendations',
      'Advanced gear analysis',
      'Unlimited preset storage',
      'Community sharing & interaction',
      'Priority support',
      'Purchase link integration'
    ],
    popular: true,
    ctaText: 'Try Plus'
  }
];