import './PriceCard.scss';

const PriceCard = ({ title, description, price, period }) => {
  return (
    <div className="price-card">
      <h2 className="price-card__title">{title}</h2>
      <p className="price-card__description">{description}</p>
      <div className="price-card__price-container">
        <strong className="price-card__price">{price}</strong>
        <span className="price-card__period">{period}</span>
        {/* <strong>$190.00</strong>
              <span>per year</span> */}
      </div>
      <a href="#!" className="price-card__pick-plan-button">
        Pick Plan
      </a>
    </div>
  );
};

export default PriceCard;
