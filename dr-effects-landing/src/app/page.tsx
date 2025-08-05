import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';
import DemoSection from '@/components/sections/DemoSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeatureSection />
      <DemoSection />
    </main>
  );
}
