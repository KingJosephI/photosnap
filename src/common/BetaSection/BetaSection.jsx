import whiteArrow from '../../assets/shared/desktop/arrow-white.svg';
import './BetaSection.scss';

const BetaSection = () => {
  return (
    <section className="beta">
      <h2 className="beta__title">We're in Beta. Get your invite today!</h2>
      <div className="card__read-story cta">
        <a href="#!" className="text">
          Get an invite
        </a>
        <div>
          <img src={whiteArrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BetaSection;
