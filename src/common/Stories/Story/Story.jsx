import PropTypes from 'prop-types';
import whiteArrow from '../../../assets/shared/desktop/arrow-white.svg';
import './Story.scss';

const Story = ({ image = '', title = '', author = '', date = '' }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="Illustration" loading="lazy" />
      </div>
      <div className="card__content">
        <span className="card__date">{date}</span>
        <h4 className="card__title">{title}</h4>
        <strong className="card__author">{author}</strong>
        <div className="card__read-story cta">
          <a href="#!" className="text">
            Read Story
          </a>
          <div>
            <img src={whiteArrow} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

Story.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
};

export default Story;
