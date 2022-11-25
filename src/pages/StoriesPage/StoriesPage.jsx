import { useEffect } from 'react';
import { Layout, Stories } from '../../common';
import { Landing } from './components';
import { stories } from './data';

const StoriesPage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <Landing />
      <Stories data={stories} />
    </Layout>
  );
};

export default StoriesPage;
