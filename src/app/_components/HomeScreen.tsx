import React from "react";
import Hero from "./(HomeScreen)/Hero";
import Unique from "./(HomeScreen)/Unique";
import FeaturedFreelancers from "./(HomeScreen)/FeaturedFreelancers";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Unique />
      <FeaturedFreelancers />
    </div>
  );
};

export default HomeScreen;
