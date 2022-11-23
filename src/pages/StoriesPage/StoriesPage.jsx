import { Layout } from '../../common/Layout/Layout';
import moon from '../../assets/stories/desktop/moon-of-appalacia.jpg';
import whiteArrow from '../../assets/shared/desktop/arrow-white.svg';
import Stories from '../../common/Stories/Stories';
import { stories } from './data/stories';

const StoriesPage = () => {
  return (
    <Layout>
      <section className="landing">
        <div>
          <img src={moon} alt="" />
        </div>
        <div>
          <span>Last month's featured story</span>
          <h1>Hazy full moon of Appalachia</h1>
          <div>
            <span>March 2nd 2020</span>
            <strong>by John Appleseed </strong>
          </div>
          <p>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <div className="card__read-story cta">
            <a href="#!" className="text">
              Read Story
            </a>
            <div>
              <img src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Stories data={stories} />
    </Layout>
  );
};

export default StoriesPage;
