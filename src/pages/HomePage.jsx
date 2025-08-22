// import React from "react";
// import HeroSection from "../components/home/HeroSection";
// import FeaturedSection from "../components/home/FeaturedSection";
// import AboutSection from "../components/home/AboutSection";

// import CoreTechnologies from "../components/home/CoreTechnologies";
// import Newsroom from "../components/home/Newsroom";

// // We will add NewsSection etc. later

// const HomePage = () => {
//   return (
//     <div>
//       <HeroSection />
//       <FeaturedSection />

//       <CoreTechnologies />
//       <Newsroom />

//       <AboutSection />
//       {/* Add other sections here */}
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import AboutSection from "../components/home/AboutSection";
import CoreTechnologies from "../components/home/CoreTechnologies";
import Newsroom from "../components/home/Newsroom";

// 1. IMPORT YOUR NEW ANIMATION COMPONENT
import AnimateOnScroll from "../components/common/AnimateOnScroll";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      {/* 2. WRAP EACH SECTION YOU WANT TO ANIMATE */}
      <AnimateOnScroll>
        <FeaturedSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <CoreTechnologies />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Newsroom />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <AboutSection />
      </AnimateOnScroll>

      {/* You can add a delay for a staggered effect like this: */}
      {/*
      <AnimateOnScroll delay={0.1}>
        <WhereToBuy />
      </AnimateOnScroll>
      */}
    </>
  );
};

export default HomePage;
