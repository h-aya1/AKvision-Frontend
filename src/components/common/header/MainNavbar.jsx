import React from "react";
import { Link } from "react-router-dom";
import { mainNavigation } from "../../../config/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // ✅ Search icon
import styles from "./MainNavbar.module.css";

const MainNavbar = () => {
  return (
    <div className={styles.mainNavbar}>
      <div className={`container ${styles.container}`}>
        
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img 
            src="src\assets\Logo.png" 
            alt="AK Vision Logo" 
            className={styles.logoImg} 
          />
          <span className={styles.logoText}>AK VISION</span>
        </Link>


        {/* Navigation Links */}
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
                          <Link key={i} to={l.path} className={styles.megaLink}>
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

        {/* Search Box */}
        <div className={styles.searchBox}>
          <MagnifyingGlassIcon className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search..." 
            className={styles.searchInput} 
          />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
