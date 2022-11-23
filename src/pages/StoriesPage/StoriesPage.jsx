import { Layout } from '../../common/Layout/Layout';
import Stories from '../../common/Stories/Stories';
import Landing from './components/Landing/Landing';
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
