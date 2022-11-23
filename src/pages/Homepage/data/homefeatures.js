import ResponsiveImage from '../../../assets/features/desktop/responsive.svg';
import NoLimitImage from '../../../assets/features/desktop/no-limit.svg';
import EmbedImage from '../../../assets/features/desktop/embed.svg';

export const features = [
  {
    id: 1,
    title: '100% Responsive',
    description:
      'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    image: ResponsiveImage,
  },

  {
    id: 2,
    title: 'No Photo Upload Limit',
    description:
      'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    image: NoLimitImage,
  },

  {
    id: 3,
    title: 'Available to Embed',
    description:
      'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    image: EmbedImage,
  },
];
