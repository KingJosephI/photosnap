import PropTypes from 'prop-types';
import Feature from './Feature/Feature';
import './Features.scss';

const Features = ({ data = [] }) => {
  return (
    <section className="features">
      {data.map(({ id, title, description, image }) => (
        <Feature
          key={id}
          description={description}
          title={title}
          image={image}
        />
      ))}
    </section>
  );
};

Features.propTypes = {
  data: PropTypes.array,
};

export default Features;
