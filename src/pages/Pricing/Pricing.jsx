import { BetaSection, Hero, Layout } from '../../common';
import heroImage from '../../assets/pricing/desktop/hero.jpg';
import { PricingPlans } from './components';

const Pricing = () => {
  const title = 'Pricing';
  const description =
    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’sthe simple way to create and share your photos.';

  return (
    <Layout>
      <Hero title={title} description={description} illustration={heroImage} />
      <PricingPlans />
      Compare The Features Basic Pro Business Unlimited Story Posting Unlimited
      Photo Upload Embedding Custom Content Customize Metadata Advanced Metrics
      Photo Downloads Search Engine Indexing Custom Analytics
      <BetaSection />
    </Layout>
  );
};

export default Pricing;
