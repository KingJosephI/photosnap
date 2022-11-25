import { createContext, useState } from 'react';

export const PricingToggleContext = createContext();

export const PricingToggleProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <PricingToggleContext.Provider value={[isChecked, setIsChecked]}>
      {children}
    </PricingToggleContext.Provider>
  );
};
