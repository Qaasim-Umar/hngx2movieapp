import React from "react";

import Hero from "../sections/Hero/hero";
import Footer from "../sections/Footer/Footer";
import FeaturedMovie from "../sections/FeaturedMovie/FeaturedMovie";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedMovie />
      <Footer />
    </div>
  );
};

export default Home;
