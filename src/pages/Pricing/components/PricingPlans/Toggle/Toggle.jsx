import { useContext } from 'react';
import { PricingToggleContext } from '../../../../../context/PricingToggleContext';
import './Toggle.scss';

const Toggle = () => {
  const [isChecked, setIsChecked] = useContext(PricingToggleContext);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="toggle">
      <span className="toggle__month">Monthly</span>
      <label className="toogle__switch switch">
        <input type="checkbox" value={isChecked} onChange={handleChange} />
        <span className="slider round"></span>
      </label>
      <span className="toggle__month">Yearly</span>
    </div>
  );
};

export default Toggle;
