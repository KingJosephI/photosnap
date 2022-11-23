import { Features, Layout } from '../../common';
import { features } from './data';

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
      <section>
        We're in Beta. Get your invite today! Get an invite Home Stories
        Features Pricing Get an invite Copyright 2019. All Rights Reserved
      </section>
    </Layout>
  );
};

export default FeaturesPage;
