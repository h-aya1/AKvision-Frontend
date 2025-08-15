import React from "react";
import styles from "./FeaturedSection.module.css";

const FeatureCard = ({ image, title, description, linkText }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={title} />
      <div className={styles.gradient} />
      <div className={styles.titleBar}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.hoverPanel}>
        <h3 className={styles.hoverTitle}>{title}</h3>
        {description && <p className={styles.desc}>{description}</p>}
        <div className={styles.ctaRow}>
          <a href="#" className={styles.cardLink}>
            {linkText}
          </a>
          <button className={styles.roundArrow} aria-label="Open">→</button>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedSection = () => {
  const features = [
    {
      img: "https://images.unsplash.com/photo-1583229447819-9d7bcb38a69b?q=80&w=1200&auto=format&fit=crop",
      title: "Network Camera",
      description:
        "High-performance network cameras with AI analytics and night vision.",
      link: "View More",
    },
    {
      img: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop",
      title: "PTZ Camera",
      description:
        "Precision pan-tilt-zoom with smart tracking and low-light clarity.",
      link: "View More",
    },
    {
      img: "/images/nvr.jpg",
      title: "Network Video Recorder",
      description:
        "AcuSeek NVRs enable instant video retrieval through natural language.",
      link: "View More",
    },
    {
      img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop",
      title: "Video Intercom",
      description: "Secure entry with HD video, two-way audio, and mobile access.",
      link: "View More",
    },
    {
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      title: "Access Control",
      description: "Face, fingerprint, and card terminals for every scenario.",
      link: "View More",
    },
    {
      img: "https://images.unsplash.com/photo-1600267175164-c7a2cbb39cc6?q=80&w=1200&auto=format&fit=crop",
      title: "LED Displays",
      description: "Indoor and outdoor LED with vibrant color and high reliability.",
      link: "View More",
    },
  ];

  const trackRef = React.useRef(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  const updateArrows = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [updateArrows]);

  const scrollByOneCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector(`.${styles.card}`);
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width
      : el.clientWidth * 0.25;
    const gap = 24;
    const delta = dir === "next" ? cardWidth + gap : -(cardWidth + gap);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        {/* <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Products</h2>
          <a href="/products" className={styles.seeAllLink}>See All Products →</a>
        </div> */}

        <div className={styles.slider}>
          <button
            className={`${styles.arrow} ${!canPrev ? styles.disabled : ""}`}
            onClick={() => scrollByOneCard("prev")}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className={styles.track} ref={trackRef}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.img}
                title={feature.title}
                description={feature.description}
                linkText={feature.link}
              />
            ))}
          </div>

          <button
            className={`${styles.arrow} ${styles.next} ${!canNext ? styles.disabled : ""}`}
            onClick={() => scrollByOneCard("next")}
            aria-label="Next"
          >
            ›
          </button>

          <div className={styles.edgeLeft} />
          <div className={styles.edgeRight} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
