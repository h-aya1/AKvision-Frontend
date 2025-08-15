import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>Leading the Future of AIoT</h1>
        <p className={styles.subtitle}>Harmonizing intelligent perception and multi-modal innovation.</p>
        <div className={styles.ctaRow}>
          <button className={styles.primaryCta}>Explore Products</button>
          <button className={styles.secondaryCta}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
