import React from 'react';

import Header from './header';
import Footer from './footer';
import MainContent from './mainContent'

const Application = () => {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Application;