import whiteArrow from '../../assets/shared/desktop/arrow-white.svg';
import './Story.scss';

const Story = ({ image, title, author }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="Illustration" />
      </div>
      <div className="card__content">
        <h4 className="card__title">{title}</h4>
        <strong className="card__author">{author}</strong>
        <div className="card__read-story cta">
          <a href="#!" className="text">
            Read Story
          </a>
          <div>
            <img src={whiteArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
