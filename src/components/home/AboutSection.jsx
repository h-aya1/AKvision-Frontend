import React from "react";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.containerLayout}`}>
        <div className={styles.imageWrapper}>
          <img
            src="https://via.placeholder.com/600x450.png?text=Akvistion+Team"
            alt="About Akvistion"
          />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.preTitle}>About Akvistion</p>
          <h2 className={styles.title}>
            Comprehensive security solutions for every need
          </h2>
          <p className={styles.description}>
            Akvistion is a leading provider of innovative security products and
            solutions. We empower our customers to achieve their safety and
            business intelligence goals through our state-of-the-art technology
            and unwavering commitment to quality.
          </p>
          <button className={styles.aboutButton}>Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
