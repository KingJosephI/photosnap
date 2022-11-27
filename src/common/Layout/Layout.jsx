import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Layout = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
