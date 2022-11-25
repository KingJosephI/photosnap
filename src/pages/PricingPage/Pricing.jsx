import { useEffect } from 'react';
import { BetaSection, Hero, Layout } from '../../common';
import { PricingPlans, CompareTable, MobileTable } from './components';
import heroImage from '../../assets/pricing/desktop/hero.jpg';

const Pricing = () => {
  const title = 'Pricing';
  const description =
    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’sthe simple way to create and share your photos.';
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <Hero title={title} description={description} illustration={heroImage} />
      <PricingPlans />
      <CompareTable />
      <MobileTable />
      <BetaSection />
    </Layout>
  );
};

export default Pricing;
