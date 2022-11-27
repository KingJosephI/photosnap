import PropTypes from 'prop-types';
import './Feature.scss';

const Feature = ({ title = '', description = '', image = '' }) => {
  return (
    <div className="feature">
      <div className="feature__image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="feature__content">
        <h2 className="feature__title">{title}</h2>
        <p className="feature__description">{description}</p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Feature;
