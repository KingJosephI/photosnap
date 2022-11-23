import { Services } from './components/';
import { Layout, Stories, Features } from '../../common';
import { stories } from './data/homestories';
import { features } from './data/homefeatures';

const Homepage = () => {
  return (
    <Layout>
      <main>
        <Services />
        <Stories data={stories} />
        <Features data={features} />
      </main>
    </Layout>
  );
};

export default Homepage;
