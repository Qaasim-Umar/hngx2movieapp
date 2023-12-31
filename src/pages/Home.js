import React from "react";
import { useState } from "react";

import Hero from "../sections/Heero/Heero";
import Footer from "../sections/Footer/Footer";
import FeaturedMovie from "../sections/FeaturedMovie/FeaturedMovie";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      {/* Sections in the Home page */}
      <Hero onSearch={setSearchQuery}  />
      <FeaturedMovie searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default Home;
