import React from 'react';
import Slider from '../components/Slider';
import Cards from '../components/Cards';


const Home = () => {
  return (
    <div>
      <Slider />
      <h1 className="text-2xl font-bold text-center my-4">Welcome to Our Site</h1>
      <Cards />
    </div>
  );
};

export default Home;