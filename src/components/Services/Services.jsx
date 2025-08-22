// import React from 'react';
// import { Link } from 'react-router-dom';
// import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
// import styles from './Services.module.css';

// const Services = () => {
//   const products = [
//     {
//       name: 'Security Cameras',
//       imageUrl: 'https://picsum.photos/seed/camera/600/400',
//     },
//     {
//       name: 'Network Routers',
//       imageUrl: 'https://picsum.photos/seed/router/600/400',
//     },
//     {
//       name: 'Ethernet Switches',
//       imageUrl: 'https://picsum.photos/seed/switch/600/400',
//     },
//     {
//       name: 'Cables & Accessories',
//       imageUrl: 'https://picsum.photos/seed/cables/600/400',
//     },
//   ];

//   return (
//     <div className={styles.servicesPage}>
//       {/* Page Header */}
//       <section className={styles.pageHeader}>
//         <div className={styles.headerContent}>
//           <div className={styles.headerText}>
//             <h1 className={styles.pageTitle}>Our Services</h1>
//             <p className={styles.pageSubtitle}>
//               We provide top-tier electronic equipment and expert installation services to meet your needs.
//             </p>
//           </div>
//           <div className={styles.headerImageContainer}>
//             <img src="https://picsum.photos/seed/services/600/400" alt="Professional Services" className={styles.headerImage} />
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className={styles.productsSection}>
//         <h2 className={styles.sectionTitle}>Products We Sell & Install</h2>
//         <div className={styles.productsGrid}>
//           {products.map((product) => (
//             <div key={product.name} className={styles.productCard}>
//               <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
//               <div className={styles.productOverlay}>
//                 <h3 className={styles.productName}>{product.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//       </section>

//       {/* Installation Section */}
//       <section className={styles.installationSection}>
//         <div className={styles.installationContent}>
//           <div className={styles.installationIcon}>
//             <WrenchScrewdriverIcon />
//           </div>
//           <h2 className={styles.sectionTitle}>Professional Installation</h2>
//           <p className={styles.installationDescription}>
//             Our certified technicians ensure your systems are installed correctly and efficiently, with services including site surveys, professional mounting, system configuration, and post-installation support.
//           </p>
//         </div>
//       </section>

//       {/* Service Process Section */}
//       <section className={styles.processSection}>
//         <h2 className={styles.sectionTitle}>Our Service Process</h2>
//         <div className={styles.processSteps}>
//           {[
//             { step: 1, title: 'Consultation' },
//             { step: 2, title: 'Site Assessment' },
//             { step: 3, title: 'Installation' },
//             { step: 4, title: 'Follow-up' },
//           ].map((step, index) => (
//             <React.Fragment key={step.step}>
//               <div className={styles.processStep}>
//                 <div className={styles.stepNumber}>{step.step}</div>
//                 <h3 className={styles.stepTitle}>{step.title}</h3>
//               </div>
//               {index < 3 && <div className={styles.stepConnector}></div>}
//             </React.Fragment>
//           ))}
//         </div>
//         <div className={styles.ctaContainer}>
//           <Link to="/contact/sales" className={styles.ctaButton}>
//             Contact Sales
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;

// ?

import React from "react";
import { Link } from "react-router-dom";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import AnimateOnScroll from "../common/AnimateOnScroll"; // Import our animation tool
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Services.module.css";

const products = [
  {
    name: "Security Cameras",
    imageUrl: "https://picsum.photos/seed/camera/600/400",
  },
  {
    name: "Network Routers",
    imageUrl: "https://picsum.photos/seed/router/600/400",
  },
  {
    name: "Ethernet Switches",
    imageUrl: "https://picsum.photos/seed/switch/600/400",
  },
  {
    name: "Cables & Accessories",
    imageUrl: "https://picsum.photos/seed/cables/600/400",
  },
];

const testimonials = [
  {
    quote:
      "AKvision's installation team was incredibly professional and efficient. Our new system provides us with unparalleled peace of mind.",
    author: "John Doe",
    company: "CEO, Tech Solutions Inc.",
  },
  {
    quote:
      "The quality of the security cameras is outstanding. The clarity is remarkable, and the remote access features are a game-changer for our business.",
    author: "Jane Smith",
    company: "Operations Manager, Retail Group",
  },
  {
    quote:
      "From consultation to post-installation support, the service has been exceptional. I highly recommend AKvision to any business serious about security.",
    author: "Samuel Lee",
    company: "Facility Director, Global Logistics",
  },
];

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      {/* 1. Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.pageTitle}>Our Services</h1>
              <p className={styles.pageSubtitle}>
                We provide top-tier electronic equipment and expert installation
                services to meet your needs.
              </p>
            </div>
            <div className={styles.headerImageContainer}>
              <img
                src="https://picsum.photos/seed/services/600/400"
                alt="Professional Services"
                className={styles.headerImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Products Section with ANIMATION */}
      <section className={styles.productsSection}>
        <div className="container">
          <AnimateOnScroll>
            <h2 className={styles.sectionTitle}>Products We Sell & Install</h2>
          </AnimateOnScroll>
          <div className={styles.productsGrid}>
            {products.map((product, index) => (
              <AnimateOnScroll key={product.name} delay={index * 0.1}>
                <div className={styles.productCard}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productOverlay}>
                    <h3 className={styles.productName}>{product.name}</h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW Testimonials Section with ANIMATION */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <AnimateOnScroll>
            <h2 className={`${styles.sectionTitle} ${styles.lightText}`}>
              Trusted by Industry Leaders
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className={styles.testimonialSlider}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className={styles.testimonialSlide}>
                  <p className={styles.quote}>“{testimonial.quote}”</p>
                  <div className={styles.author}>
                    <span className={styles.authorName}>
                      {testimonial.author}
                    </span>
                    ,{" "}
                    <span className={styles.authorCompany}>
                      {testimonial.company}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 4. Installation Section with ANIMATION */}
      <section className={styles.installationSection}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.installationContent}>
              <div className={styles.installationIcon}>
                <WrenchScrewdriverIcon />
              </div>
              <h2 className={styles.sectionTitle}>Professional Installation</h2>
              <p className={styles.installationDescription}>
                Our certified technicians ensure your systems are installed
                correctly and efficiently, with services including site surveys,
                professional mounting, system configuration, and
                post-installation support.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 5. Service Process Section with ANIMATION */}
      <section className={styles.processSection}>
        <div className="container">
          <AnimateOnScroll>
            <h2 className={styles.sectionTitle}>Our Service Process</h2>
          </AnimateOnScroll>
          <div className={styles.processSteps}>
            {[
              { step: 1, title: "Consultation" },
              { step: 2, title: "Site Assessment" },
              { step: 3, title: "Installation" },
              { step: 4, title: "Follow-up" },
            ].map((step, index) => (
              <React.Fragment key={step.step}>
                <AnimateOnScroll
                  className={styles.processStepWrapper}
                  delay={index * 0.15}
                >
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>{step.step}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                </AnimateOnScroll>
                {index < 3 && <div className={styles.stepConnector}></div>}
              </React.Fragment>
            ))}
          </div>
          <AnimateOnScroll>
            <div className={styles.ctaContainer}>
              <Link to="/contact/sales" className={styles.ctaButton}>
                Request a Consultation
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Services;
