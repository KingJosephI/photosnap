import './PriceCardBlack.scss';

const PriceCardBlack = ({ title, description, price, period, ...props }) => {
  return (
    <div className="price-card card-black" {...props}>
      <h2 className="price-card__title card-black__title">{title}</h2>
      <p className="price-card__description">{description}</p>
      <div className="price-card__price-container">
        <strong className="price-card__price">{price}</strong>
        <span className="price-card__period">{period}</span>
      </div>
      <a href="#!" className="price-card__pick-plan-button pick-plan-black">
        Pick Plan
      </a>
    </div>
  );
};

export default PriceCardBlack;
