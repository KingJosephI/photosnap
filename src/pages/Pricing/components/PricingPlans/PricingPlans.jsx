import PriceCard from './PriceCard/PriceCard';
import Toggle from './Toggle/Toggle';
import './PricingPlans.scss';
import PriceCardBlack from './PriceCardBlack/PriceCardBlack';

const PricingPlans = () => {
  return (
    <section className="prices">
      <Toggle />

      <div className="prices__plans">
        <PriceCard
          title="Basic"
          description="Includes basic usage of our platform. Recommended for new and
              aspiring photographers."
          price="$19.00"
          period="month"
        />
        <PriceCardBlack
          title="Pro"
          description="More advanced features available. Recommended for photography
              veterans and professionals."
          price="$39.00"
          period="month"
        />
        <PriceCard
          title="Business"
          description="Additional features available such as more detailed metrics. Recommended for business owners."
          price="$99.00"
          period="month"
        />
      </div>
    </section>
  );
};

export default PricingPlans;
