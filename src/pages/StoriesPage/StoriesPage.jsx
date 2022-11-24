import { Layout, Stories } from '../../common';
import { Landing } from './components';
import { stories } from './data';

const StoriesPage = () => {
  return (
    <Layout>
      <Landing />
      <Stories data={stories} />
    </Layout>
  );
};

export default StoriesPage;
