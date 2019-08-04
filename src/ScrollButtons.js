import React from 'react';
import './ScrollButtons.css';

const ScrollButtons = () => (
  <div className="scroll-buttons">
    <button
      onClick={ () => window.scrollTo({top: 0, behavior: 'smooth'}) }
    >
      <i className="fa fa-arrow-up"></i>
    </button>
    <button
      onClick={ () => window.scrollTo({top: 10000, behavior: 'smooth'}) }
    >
      <i className="fa fa-arrow-down"></i>
    </button>
  </div>
);

export default ScrollButtons;