import { useEffect } from 'react';
import { Services } from './components';
import { Layout, Stories, Features } from '../../common';
import { stories, features } from './data';

const Homepage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <Services />
      <Stories data={stories} />
      <Features data={features} />
    </Layout>
  );
};

export default Homepage;
