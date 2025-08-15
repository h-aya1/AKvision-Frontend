import React, { useState, useRef, useEffect } from "react";
import styles from "./Newsroom.module.css";

// Data with the correct video URLs
const newsItems = [
  {
    category: "Success Story",
    title:
      "Cambodian hotel resort dazzles the coast with majestic Hikvision LED display",
    tags: "Cambodia, Commercial Displays, Hospitality",
    videoUrl:
      "https://www.hikvision.com/content/dam/hikvision/en/videos/success-story/Cambodian-Hotel-Resort-Dazzles-the-Coast-with-Majestic-Hikvision-LED-Display/Cambodian-Hotel-Resort-Dazzles-the-Coast-with-Majestic-Hikvision-LED-Display.mp4",
  },
  {
    category: "Success Story",
    title:
      "Hikvision helps Vialia Vigo Shopping Center boost safety, efficiency and customer satisfaction",
    tags: "Retail, Security and Intelligence, Spain",
    videoUrl:
      "https://www.hikvision.com/content/dam/hikvision/en/videos/success-story/Vialia-Vigo-Shopping-Center-Boosts-Safety/Vialia-Vigo-Shopping-Center-Boosts-Safety.mp4",
  },
  {
    category: "Success Story",
    title:
      "Crafting a digital oasis: a Saudi university’s journey to smart education",
    tags: "Education, Saudi Arabia, Security and Intelligence",
    videoUrl:
      "https://www.hikvision.com/content/dam/hikvision/en/videos/success-story/A-Saudi-University-s-Journey-to-Smart-Education/A-Saudi-University-s-Journey-to-Smart-Education.mp4",
  },
];

const Newsroom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  const goToSlide = (index) => {
    const newIndex = (index + newsItems.length) % newsItems.length;
    setActiveIndex(newIndex);
  };

  const playPauseCurrent = () => {
    const video = videoRefs.current[activeIndex];
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  };

  // This effect ensures that when the slide changes, all other videos are paused and reset.
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <section className={styles.newsroomSection}>
      <div className={`container ${styles.header}`}>
        <h2 className={styles.sectionTitle}>Newsroom</h2>
        <a href="#" className={styles.viewAllLink}>
          View more →
        </a>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.slider}>
          {newsItems.map((item, index) => {
            // This logic determines the CSS class for positioning the slides
            let positionClass = styles.offscreenSlide;
            if (index === activeIndex) {
              positionClass = styles.activeSlide;
            } else if (
              index ===
              (activeIndex - 1 + newsItems.length) % newsItems.length
            ) {
              positionClass = styles.prevSlide;
            } else if (index === (activeIndex + 1) % newsItems.length) {
              positionClass = styles.nextSlide;
            }

            return (
              <article
                className={`${styles.slide} ${positionClass}`}
                key={index}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className={styles.backgroundVideo}
                  src={item.videoUrl}
                  muted
                  loop
                  playsInline
                />
                <div className={styles.slideContent}>
                  <p className={styles.category}>{item.category}</p>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.tags}>{item.tags}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* --- Custom Controls --- */}
        <div className={styles.controls}>
          <button
            className={styles.navButton}
            onClick={() => goToSlide(activeIndex - 1)}
          >
            &lt;
          </button>
          <div className={styles.pagination}>
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === activeIndex ? styles.dotActive : ""
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
          <button
            className={styles.navButton}
            onClick={() => goToSlide(activeIndex + 1)}
          >
            &gt;
          </button>
          <button className={styles.navButton} onClick={playPauseCurrent}>
            ❚❚
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
