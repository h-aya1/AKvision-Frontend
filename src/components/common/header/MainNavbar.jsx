import React from "react";
import { Link } from "react-router-dom";
import { useUI } from "../../../context/UIContext";
import { mainNavigation } from "../../../config/navigation";
import styles from "./MainNavbar.module.css";
// import AkvistionLogo from "../../assets/akvistion-logo.svg"; // We'll create this

const MainNavbar = () => {
  const { setIsSearchOpen } = useUI();
  // No sticky behavior: navbar scrolls away like Hikvision
  return (
    <div className={styles.mainNavbar}>
      <div className={`container ${styles.container}`}>
        <div className={styles.leftArea}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>AK VISTION</span>
          </Link>

          {/* Navigation Links with Mega Menu */}
          <nav className={styles.navLinks}>
            {mainNavigation.map((item) => (
              <div key={item.id} className={styles.navItem}>
                <Link to={item.path}>{item.label}</Link>
                {item.mega && (
                  <div className={styles.mega}>
                    <div className={styles.megaGrid}>
                      {item.mega.map((col, idx) => (
                        <div key={idx}>
                          <div className={styles.megaColTitle}>{col.title}</div>
                          {col.links.map((l, i) => (
                            <Link
                              key={i}
                              to={l.path}
                              className={styles.megaLink}
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right side actions */}
        <div className={styles.navActions}>
          <button
            className={styles.searchButton}
            onClick={() => setIsSearchOpen(true)}
          >
            Search
          </button>
          <button className={styles.contactButton}>Contact Sales</button>
        </div>
      </div>
    </div>
  );
};
export default MainNavbar;
