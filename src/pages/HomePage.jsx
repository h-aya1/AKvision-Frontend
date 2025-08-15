import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import AboutSection from "../components/home/AboutSection";

import CoreTechnologies from "../components/home/CoreTechnologies";
import Newsroom from "../components/home/Newsroom";
import WhereToBuy from "../components/home/WhereToBuy";
// We will add NewsSection etc. later

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
    
      <CoreTechnologies />
      <Newsroom />
      <WhereToBuy />
      <AboutSection />
      {/* Add other sections here */}
    </div>
  );
};

export default HomePage;
