import React from 'react';
import ReactDOM from 'react-dom';
import ScrollButtons from './ScrollButtons';

import '@fortawesome/fontawesome-free/js/all';

import Footer from './Footer/Footer';
import Header from './Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{height: '500px'}}> </div>
      <Footer />
      <ScrollButtons />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));