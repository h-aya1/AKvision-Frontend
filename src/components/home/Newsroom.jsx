import React, { useState } from "react";
import styles from "./Newsroom.module.css"; // Changed to CSS Module import
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const Newsroom = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const featuredStory = {
    category: "Success Story",
    title:
      "Crafting a digital oasis: a Saudi university's journey to smart education",
    tags: ["Education", "Saudi Arabia", "Security and Intelligence"],
    image: "https://ext.same-assets.com/2463856760/32746476.jpeg",
  };

  const newsItems = [
    {
      title:
        "Bringing Invisible science to life: Hikvision's caring partnership with Wonder Hub",
      category: "Blog",
      date: "June 26, 2025",
      image: "https://ext.same-assets.com/2463856760/146643026.jpeg",
    },
    {
      title:
        "Hikvision launches new DeepinViewX bullet camera for enhanced perimeter protection",
      category: "Latest News",
      date: "July 01, 2025",
      image: "https://ext.same-assets.com/2463856760/3136571966.jpeg",
    },
    {
      title:
        "Hikvision launches brand-new WonderHub, simplifying smart building management",
      category: "Latest News",
      date: "July 02, 2025",
      image: "https://ext.same-assets.com/2463856760/2060804859.jpeg",
    },
  ];

  const sportsStory = {
    title:
      "Putting video on the podium: Improving sporting safety and fan experiences",
    category: "Blog",
    date: "June 30, 2025",
    image: "https://ext.same-assets.com/2463856760/1689404548.jpeg",
  };

  return (
    <section className={styles.newsroomSection}>
      <div className="container">
        {" "}
        {/* Using global container */}
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Newsroom</h2>
          <button className={styles.viewMoreButton}>
            View more <ArrowRight className={styles.arrowIcon} />
          </button>
        </div>
        {/* Featured Story Carousel */}
        <div className={styles.featuredStory}>
          <div className={styles.featuredImageWrapper}>
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className={styles.imageFull}
            />
            <div className={styles.gradientOverlay}></div>
            <div className={styles.featuredText}>
              <div className={styles.categoryText}>
                {featuredStory.category}
              </div>
              <h3 className={styles.featuredTitle}>{featuredStory.title}</h3>
              <div className={styles.tags}>
                {featuredStory.tags.map((tag, index) => (
                  <span key={index}>
                    {tag}
                    {index < featuredStory.tags.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
            {/* Carousel Controls */}
            <div className={styles.carouselControls}>
              <button className={styles.controlButton}>
                <ChevronLeft />
              </button>
              <div className={styles.dots}>
                <div className={`${styles.dot} ${styles.dotActive}`}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <button className={styles.controlButton}>
                <ChevronRight />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={styles.controlButton}
              >
                {isPlaying ? <Pause /> : <Play />}
              </button>
            </div>
          </div>
        </div>
        {/* News Grid */}
        <div className={styles.newsGrid}>
          {/* Sports Story */}
          <div className={styles.sportsStory}>
            <img
              src={sportsStory.image}
              alt={sportsStory.title}
              className={styles.sportsImage}
            />
            <div className={styles.gradientOverlay}></div>
            <div className={styles.sportsText}>
              <div className={styles.categoryText}>
                {sportsStory.category} | {sportsStory.date}
              </div>
              <h3 className={styles.sportsTitle}>{sportsStory.title}</h3>
            </div>
          </div>
          {/* News Items */}
          <div className={styles.newsItemsList}>
            {newsItems.map((item, index) => (
              <div key={index} className={styles.newsItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.newsItemImage}
                />
                <div className={styles.newsItemText}>
                  <div className={styles.categoryTextSmall}>
                    {item.category} | {item.date}
                  </div>
                  <h4 className={styles.newsItemTitle}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
