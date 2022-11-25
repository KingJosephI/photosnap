import { useEffect } from 'react';
import { Features, Layout, BetaSection, Hero } from '../../common';
import { features } from './data';
import heroImage from '../../assets/features/desktop/hero.jpg';

const FeaturesPage = () => {
  const title = 'Features';
  const description =
    'We make sure all of our features are designed to be loved by every  aspiring and even professional photograpers who wanted to share their stories.';

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <Hero title={title} description={description} illustration={heroImage} />
      <Features data={features} />
      <BetaSection />
    </Layout>
  );
};

export default FeaturesPage;
