import { Features, Layout, BetaSection, Hero } from '../../common';
import { features } from './data';
import illustration from '../../assets/features/desktop/hero.jpg';
// import './Features.scss';
// import Hero from '../../common/Hero/Hero';

const FeaturesPage = () => {
  return (
    <Layout>
      <Hero
        title="Features"
        description="We make sure all of our features are designed to be loved
      by every  aspiring and even professional photograpers who wanted to
      share their stories."
        illustration={illustration}
      />
      <Features data={features} />
      <BetaSection />
    </Layout>
  );
};

export default FeaturesPage;
