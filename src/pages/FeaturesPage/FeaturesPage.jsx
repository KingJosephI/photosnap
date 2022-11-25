import { Features, Layout, BetaSection, Hero } from '../../common';
import { features } from './data';
import heroImage from '../../assets/features/desktop/hero.jpg';

const FeaturesPage = () => {
  const title = 'Features';
  const description =
    'We make sure all of our features are designed to be loved by every  aspiring and even professional photograpers who wanted to share their stories.';

  return (
    <Layout>
      <Hero title={title} description={description} illustration={heroImage} />
      <Features data={features} />
      <BetaSection />
    </Layout>
  );
};

export default FeaturesPage;
