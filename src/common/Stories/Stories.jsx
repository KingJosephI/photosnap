import PropTypes from 'prop-types';
import Story from './Story/Story';
import './Stories.scss';

const Stories = ({ data }) => {
  return (
    <section className="stories">
      {data.map(({ author, title, image, date, id }) => (
        <Story
          key={id}
          author={author}
          title={title}
          date={date}
          image={image}
        />
      ))}
    </section>
  );
};

Stories.propTypes = {
  data: PropTypes.array,
};

export default Stories;
