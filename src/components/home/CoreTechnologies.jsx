import React from "react";
// ... Swiper imports remain the same
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./CoreTechnologies.module.css";

// Data for our carousel slides
const slides = [
  {
    title: "EaseEngine",
    description:
      "Hikvision's EaseEngine transforms complex systems into intuitive experiences. With this technology, Hikvision's serverless management platforms eliminate operational overhead, intelligent design creates seamless user journeys, and systems are deployed flexibly across virtually any environment, delivering the ease and simplicity users expect.",
    imgUrl:
      "https://www.hikvision.com/content/dam/hikvision/en/images/home-page/core-technologies/ease-engine-m.jpg",
  },
  {
    title: "eDVR Series",
    description:
      "Discover the efficiency and reliability of Hikvision's eDVR series. These devices offer enhanced video storage and management capabilities, ensuring your security footage is always accessible and secure with advanced solid-state drive technology.",
    imgUrl:
      "https://www.hikvision.com/content/dam/hikvision/en/images/home-page/core-technologies/edvr-m.jpg",
  },
  // Add more slides here if needed
];

const CoreTechnologies = () => {
  return (
    // The main section has the black background
    <section className={styles.coreTechSection}>
      {/* The container now wraps everything inside */}
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Core Technologies</h2>
          <a href="#" className={styles.viewAllLink}>
            View more →
          </a>
        </div>

        <div className={styles.carouselContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            pagination={{
              clickable: true,
              el: `.${styles.swiperPagination}`,
              bulletClass: styles.swiperPaginationBullet,
              bulletActiveClass: styles.swiperPaginationBulletActive,
            }}
            className={styles.mySwiper}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.slideImage}>
                  <img src={slide.imgUrl} alt={slide.title} />
                </div>
                <div className={styles.slideContent}>
                  <h3 className={styles.slideTitle}>{slide.title}</h3>
                  <p className={styles.slideDescription}>{slide.description}</p>
                  <button className={styles.learnMoreButton}>Learn More</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Pagination Area */}
          <div className={styles.controls}>
            <div className={styles.swiperButtonPrev}>&lt;</div>
            <div className={styles.swiperPagination}></div>
            <div className={styles.swiperButtonNext}>&gt;</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;
