import { Features, Layout, BetaSection } from '../../common';
import { features } from './data';
import './Features.scss';

const FeaturesPage = () => {
  return (
    <Layout>
      <section>
        <div className="illustration">
          <img src="" alt="" />
        </div>
        <div className="content">
          <h1>Features</h1>
          <p>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
      </section>

      <Features data={features} />
      <BetaSection />
    </Layout>
  );
};

export default FeaturesPage;
