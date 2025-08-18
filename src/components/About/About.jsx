import React from 'react';
import styles from './About.module.css';
import { EyeIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon, GlobeAltIcon, BeakerIcon, ClockIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Intro Section */}
      <section className={`${styles.section} ${styles.introSection}`}>
        <div className={styles.introContent}>
          <h1 className={styles.mainTitle}>About AKvision</h1>
          <p className={styles.subtitle}>
            Pioneering the future of security with innovative technology and unwavering commitment. We are dedicated to providing solutions that protect and empower our clients.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`${styles.section} ${styles.visionSection}`}>
        <div className={styles.visionMissionContainer}>
          <div className={styles.missionVisionIcon}><EyeIcon /></div>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p className={styles.sectionText}>To be the global leader in security solutions, creating a safer world through continuous innovation and unwavering commitment to our clients.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`${styles.section} ${styles.missionSection}`}>
        <div className={styles.visionMissionContainer}>
          <div className={styles.missionVisionIcon}><RocketLaunchIcon /></div>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.sectionText}>To provide state-of-the-art, reliable, and user-friendly security systems that protect what matters most to our customers, backed by exceptional service and support.</p>
        </div>
      </section>

      {/* Company History Section */}
      <section className={`${styles.section} ${styles.historySection}`}>
        <h2 className={styles.sectionTitle}>Our Journey</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}><ClockIcon /></div>
            <div className={styles.timelineContent}>
              <h3>2010 - The Beginning</h3>
              <p>AKvision was founded with the goal of revolutionizing the security industry.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}><BeakerIcon /></div>
            <div className={styles.timelineContent}>
              <h3>2015 - First Breakthrough</h3>
              <p>Launched our first AI-powered surveillance system, setting new industry standards.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}><GlobeAltIcon /></div>
            <div className={styles.timelineContent}>
              <h3>2020 - Global Expansion</h3>
              <p>Expanded operations to over 50 countries, serving clients worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`${styles.section} ${styles.valuesSection}`}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}><h4>Integrity</h4></div>
          <div className={styles.valueCard}><h4>Innovation</h4></div>
          <div className={styles.valueCard}><h4>Customer-Centricity</h4></div>
          <div className={styles.valueCard}><h4>Excellence</h4></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`${styles.section} ${styles.whyChooseUsSection}`}>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <div className={styles.whyChooseUsGrid}>
            <div className={styles.whyChooseUsCard}>
              <div className={styles.whyChooseUsIcon}><ShieldCheckIcon /></div>
              <h3 className={styles.whyChooseUsTitle}>Reliability</h3>
              <p>Dependable solutions that you can trust, 24/7.</p>
            </div>
            <div className={styles.whyChooseUsCard}>
              <div className={styles.whyChooseUsIcon}><LightBulbIcon /></div>
              <h3 className={styles.whyChooseUsTitle}>Innovation</h3>
              <p>Cutting-edge technology to stay ahead of threats.</p>
            </div>
            <div className={styles.whyChooseUsCard}>
              <div className={styles.whyChooseUsIcon}><UserGroupIcon /></div>
              <h3 className={styles.whyChooseUsTitle}>Expert Team</h3>
              <p>A dedicated team of professionals with years of experience.</p>
            </div>
        </div>
      </section>

      {/* Innovation & Technology Section */}
      <section className={`${styles.section} ${styles.innovationSection}`}>
        <div className={styles.innovationContent}>
          <div className={styles.innovationText}>
            <h2 className={styles.sectionTitle}>Innovation & Technology</h2>
            <p>We are committed to pushing the boundaries of what's possible. Our dedicated R&D team works tirelessly to develop next-generation security solutions, from advanced AI analytics to robust hardware, ensuring we always stay one step ahead.</p>
          </div>
          <div className={styles.innovationImageContainer}>
            <img src="https://picsum.photos/seed/innovation/600/400" alt="Innovation" className={styles.innovationImage} />
          </div>
        </div>
      </section>

      {/* Global Presence Section
      <section className={`${styles.section} ${styles.globalSection}`}>
        <h2 className={styles.sectionTitle}>Our Global Presence</h2>
        <p className={styles.globalSubtitle}>Operating in over 50 countries, we provide localized support on a global scale.</p>
        <div className={styles.visionMissionContainer}>
          <GlobeAltIcon className={styles.mapIcon} />
        </div>
      </section>
      */}

    </div>
  );
};

export default About;