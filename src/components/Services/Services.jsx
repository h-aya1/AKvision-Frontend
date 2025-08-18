import React from 'react';
import { Link } from 'react-router-dom';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import styles from './Services.module.css';

const Services = () => {
  const products = [
    {
      name: 'Security Cameras',
      imageUrl: 'https://picsum.photos/seed/camera/600/400',
    },
    {
      name: 'Network Routers',
      imageUrl: 'https://picsum.photos/seed/router/600/400',
    },
    {
      name: 'Ethernet Switches',
      imageUrl: 'https://picsum.photos/seed/switch/600/400',
    },
    {
      name: 'Cables & Accessories',
      imageUrl: 'https://picsum.photos/seed/cables/600/400',
    },
  ];

  return (
    <div className={styles.servicesPage}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.pageTitle}>Our Services</h1>
            <p className={styles.pageSubtitle}>
              We provide top-tier electronic equipment and expert installation services to meet your needs.
            </p>
          </div>
          <div className={styles.headerImageContainer}>
            <img src="https://picsum.photos/seed/services/600/400" alt="Professional Services" className={styles.headerImage} />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Products We Sell & Install</h2>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.name} className={styles.productCard}>
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
              <div className={styles.productOverlay}>
                <h3 className={styles.productName}>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
      </section>

      {/* Installation Section */}
      <section className={styles.installationSection}>
        <div className={styles.installationContent}>
          <div className={styles.installationIcon}>
            <WrenchScrewdriverIcon />
          </div>
          <h2 className={styles.sectionTitle}>Professional Installation</h2>
          <p className={styles.installationDescription}>
            Our certified technicians ensure your systems are installed correctly and efficiently, with services including site surveys, professional mounting, system configuration, and post-installation support.
          </p>
        </div>
      </section>

      {/* Service Process Section */}
      <section className={styles.processSection}>
        <h2 className={styles.sectionTitle}>Our Service Process</h2>
        <div className={styles.processSteps}>
          {[
            { step: 1, title: 'Consultation' },
            { step: 2, title: 'Site Assessment' },
            { step: 3, title: 'Installation' },
            { step: 4, title: 'Follow-up' },
          ].map((step, index) => (
            <React.Fragment key={step.step}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>{step.step}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              {index < 3 && <div className={styles.stepConnector}></div>}
            </React.Fragment>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <Link to="/contact/sales" className={styles.ctaButton}>
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;