import { CalendarIcon, UserIcon, ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest security industry news, tips, and expert insights.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Placeholder for blog post image */}
                <div className="flex items-center justify-center h-48 bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-primary font-semibold">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Resources Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Placeholder for resource thumbnail */}
                  <div className="flex items-center justify-center h-40 bg-gray-100">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-primary font-semibold">{resource.type}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">{resource.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4">{resource.title}</h3>
                  <button className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors">
                    Access Resource
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-primary rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for the latest security insights and updates.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;