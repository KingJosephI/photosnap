import Landing from './components/Landing/Landing';
import { Layout, Stories } from '../../common';
import { stories } from './data/stories';

const StoriesPage = () => {
  return (
    <Layout>
      <Landing />
      <Stories data={stories} />
    </Layout>
  );
};

export default StoriesPage;
