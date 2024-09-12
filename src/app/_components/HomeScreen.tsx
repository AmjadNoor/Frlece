import React from "react";
import Hero from "./(HomeScreen)/Hero";
import Unique from "./(HomeScreen)/Unique";
import FeaturedFreelancers from "./(HomeScreen)/FeaturedFreelancers";
import Testimonials from "./(HomeScreen)/Testimonials";

const HomeScreen = () => {
  return (
    <div>
      <Hero />

      <Unique />
      <FeaturedFreelancers />

      <Testimonials />
    </div>
  );
};

export default HomeScreen;
