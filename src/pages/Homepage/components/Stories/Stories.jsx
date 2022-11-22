import Story from '../../../../common/Story/Story';
import MountainsImage from '../../../../assets/stories/desktop/mountains.jpg';
import CityscapesImage from '../../../../assets/stories/desktop/cityscapes.jpg';
import DaysVoyageImage from '../../../../assets/stories/desktop/18-days-voyage.jpg';
import ArchitecturalsImage from '../../../../assets/stories/desktop/architecturals.jpg';
import './Stories.scss';

const Stories = () => {
  const stories = [
    {
      id: 1,
      author: 'by John Appleseed',
      title: 'The Mountains',
      image: MountainsImage,
    },
    {
      id: 2,
      author: 'by Benjamin Cruz',
      title: 'Sunset Cityscapes',
      image: CityscapesImage,
    },
    {
      id: 3,
      author: 'by Alexei Borodin',
      title: '18 Days Voyage',
      image: DaysVoyageImage,
    },
    {
      id: 4,
      author: 'by Samantha Brooke',
      title: 'Architecturals',
      image: ArchitecturalsImage,
    },
  ];

  return (
    <section className="stories">
      {stories.map(({ author, title, image, id }) => (
        <Story key={id} author={author} title={title} image={image} />
      ))}
    </section>
  );
};

export default Stories;
