import { useContext } from 'react';
import { PriceCard, PriceCardBlack, PriceToggle } from './components';
import { PricingToggleContext } from '../../../../context/PricingToggleContext';
import { price } from './data';
import './PricingPlans.scss';

const PricingPlans = () => {
  const [isChecked] = useContext(PricingToggleContext);

  return (
    <section className="prices">
      <PriceToggle />

      <div className="prices__plans">
        <PriceCard
          title={price.basic.title}
          description={price.basic.description}
          price={isChecked ? price.basic.year : price.basic.month}
          period={isChecked ? 'year' : 'month'}
        />
        <PriceCardBlack
          title={price.pro.title}
          description={price.pro.description}
          price={isChecked ? price.pro.year : price.pro.month}
          period={isChecked ? 'year' : 'month'}
        />
        <PriceCard
          title={price.business.title}
          description={price.business.description}
          price={isChecked ? price.business.year : price.business.month}
          period={isChecked ? 'year' : 'month'}
        />
      </div>
    </section>
  );
};

export default PricingPlans;
