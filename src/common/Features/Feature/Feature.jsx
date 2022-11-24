import PropTypes from 'prop-types';
import './Features.scss';

const Feature = ({ title = '', description = '', image = '' }) => {
  return (
    <div className="feature">
      <div className="feature__image">
        <img src={image} alt={title} />
      </div>
      <h2 className="feature__title">{title}</h2>
      <p className="feature__description">{description}</p>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Feature;
