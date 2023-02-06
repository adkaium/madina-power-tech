import React from 'react';

// import components
import Hero from './components/Hero';
import Features from './components/Features';

const App = () => {
  return (
    <div className='w-full max-w-[1440px} mx-auto bg-white'>
      <Hero></Hero>
      <Features></Features>
    </div>
  );
};

export default App;
