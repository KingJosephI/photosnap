import moon from '../../../../assets/stories/desktop/moon-of-appalacia.jpg';
import whiteArrow from '../../../../assets/shared/desktop/arrow-white.svg';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__image">
        <img src={moon} alt="" loading="lazy" />
      </div>
      <div className="landing__content">
        <span className="landing__featured-story">
          Last month's featured story
        </span>
        <h1 className="landing__title">Hazy full moon of Appalachia</h1>
        <div className="landing__meta-info">
          <span className="landing__date">March 2nd 2020</span>
          <strong className="landing__author">by John Appleseed </strong>
        </div>
        <p className="landing__description">
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
            <img src={whiteArrow} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
