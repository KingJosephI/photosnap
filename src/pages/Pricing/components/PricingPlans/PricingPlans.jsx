import PriceCard from '../PriceCard/PriceCard';
import Toggle from '../Toggle/Toggle';
import './PricingPlans.scss';

const PricingPlans = () => {
  return (
    <section className="prices">
      <div className="prices__period">
        <Toggle />
      </div>
      <div className="prices__plans">
        <PriceCard
          title="Basic"
          description="Includes basic usage of our platform. Recommended for new and
              aspiring photographers."
        />
        <PriceCard
          title="Pro"
          description="More advanced features available. Recommended for photography
              veterans and professionals."
        />
        <PriceCard
          title="Business"
          description="Includes basic usage of our platform. Recommended for new and
              aspiring photographers."
        />
      </div>
    </section>
  );
};

export default PricingPlans;
