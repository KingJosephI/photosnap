import PriceCard from './PriceCard/PriceCard';
import Toggle from './Toggle/Toggle';
import PriceCardBlack from './PriceCardBlack/PriceCardBlack';
import { useContext } from 'react';
import { PricingToggleContext } from '../../../../context/PricingToggleContext';
import './PricingPlans.scss';

const PricingPlans = () => {
  const [isChecked] = useContext(PricingToggleContext);
  const price = {
    basic: {
      month: '$19.00',
      year: '$190.00',
    },
    pro: {
      month: '$39.00',
      year: '$390.00',
    },
    business: {
      month: '$99.00',
      year: '$990.00',
    },
  };
  return (
    <section className="prices">
      <Toggle />

      <div className="prices__plans">
        <PriceCard
          title="Basic"
          description="Includes basic usage of our platform. Recommended for new and
              aspiring photographers."
          price={isChecked ? price.basic.year : price.basic.month}
          period={isChecked ? 'year' : 'month'}
        />
        <PriceCardBlack
          title="Pro"
          description="More advanced features available. Recommended for photography
              veterans and professionals."
          price={isChecked ? price.pro.year : price.pro.month}
          period={isChecked ? 'year' : 'month'}
        />
        <PriceCard
          title="Business"
          description="Additional features available such as more detailed metrics. Recommended for business owners."
          price={isChecked ? price.business.year : price.business.month}
          period={isChecked ? 'year' : 'month'}
        />
      </div>
    </section>
  );
};

export default PricingPlans;
