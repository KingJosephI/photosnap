import './Hero.scss';

const Hero = ({ title, description, illustration }) => {
  return (
    <section className="hero">
      <div className="hero__illustration">
        <img src={illustration} alt="Illustration" />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{description}</p>
      </div>
    </section>
  );
};
export default Hero;
