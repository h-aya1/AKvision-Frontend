import { CalendarIcon, UserIcon, ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import styles from './Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Video Surveillance',
      excerpt: 'Explore how artificial intelligence is revolutionizing the security industry with smart detection and analytics.',
      image: '/blog/ai-surveillance.jpg',
      category: 'Technology',
      author: 'John Smith',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Top 5 Security Tips for Retail Stores',
      excerpt: 'Essential security measures every retail business should implement to protect assets and employees.',
      image: '/blog/retail-security.jpg',
      category: 'Industry',
      author: 'Sarah Johnson',
      date: 'March 10, 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Understanding IP Camera Resolution Standards',
      excerpt: 'A comprehensive guide to camera resolutions and how to choose the right one for your needs.',
      image: '/blog/camera-resolution.jpg',
      category: 'Guide',
      author: 'Michael Chen',
      date: 'March 5, 2024',
      readTime: '6 min read'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Camera Installation Guide',
      type: 'Video Tutorial',
      duration: '15 minutes',
      thumbnail: '/resources/installation-guide.jpg'
    },
    {
      id: 2,
      title: 'Security System Buyer\'s Guide',
      type: 'eBook',
      duration: '25 pages',
      thumbnail: '/resources/buyers-guide.jpg'
    },
    {
      id: 3,
      title: 'Network Setup Tutorial',
      type: 'Video Tutorial',
      duration: '20 minutes',
      thumbnail: '/resources/network-setup.jpg'
    }
  ];

  return (
    <div className={styles.blogPage}>
      <div className="container">
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Blog & Resources</h1>
          <p className={styles.pageDescription}>
            Stay updated with the latest security industry news, tips, and expert insights.
          </p>
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search articles..."
            className={styles.searchInput}
          />
          <MagnifyingGlassIcon className={styles.searchIcon} />
        </div>

        {/* Featured Posts */}
        <div className={styles.postsGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postImageContainer}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.postImage}
                />
              </div>
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDivider}>•</span>
                  <span className={styles.postReadTime}>
                    <ClockIcon className={styles.postReadTimeIcon} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postFooter}>
                  <div className={styles.postAuthor}>
                    <UserIcon className={styles.postAuthorIcon} />
                    <span>{post.author}</span>
                  </div>
                  <div className={styles.postDate}>
                    <CalendarIcon className={styles.postDateIcon} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Resources Section */}
        <div className={styles.resourcesSection}>
          <h2 className={styles.resourcesTitle}>Learning Resources</h2>
          <div className={styles.resourcesGrid}>
            {resources.map((resource) => (
              <div key={resource.id} className={styles.resourceCard}>
                <div className={styles.resourceImageContainer}>
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className={styles.resourceImage}
                  />
                </div>
                <div className={styles.resourceContent}>
                  <div className={styles.resourceMeta}>
                    <span className={styles.resourceType}>{resource.type}</span>
                    <span className={styles.postDivider}>•</span>
                    <span className={styles.resourceDuration}>{resource.duration}</span>
                  </div>
                  <h3 className={styles.resourceTitle}>{resource.title}</h3>
                  <button className={styles.resourceButton}>
                    Access Resource
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className={styles.newsletterSection}>
          <h2 className={styles.newsletterTitle}>Stay Updated</h2>
          <p className={styles.newsletterDescription}>Subscribe to our newsletter for the latest security insights and updates.</p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterButton}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;