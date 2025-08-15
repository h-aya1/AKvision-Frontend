import React from "react";
import styles from "./WhereToBuy.module.css";

const WhereToBuy = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Where to Buy</h2>
            <p className={styles.desc}>
              Connect with local distributors to get genuine products, expert advice,
              and reliable after-sales support.
            </p>
          </div>
          <a href="#" className={styles.cta}>
            Find a Distributor
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;


