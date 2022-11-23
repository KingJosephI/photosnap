import { Services } from './components/';
import { Layout, Stories, Features } from '../../common';
import { stories, features } from './data';

const Homepage = () => {
  return (
    <Layout>
      <Services />
      <Stories data={stories} />
      <Features data={features} />
    </Layout>
  );
};

export default Homepage;
