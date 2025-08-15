import { TrophyIcon, UserGroupIcon, BuildingOffice2Icon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const About = () => {
  const stats = [
    { id: 1, number: '10+', label: 'Years Experience' },
    { id: 2, number: '1000+', label: 'Clients Worldwide' },
    { id: 3, number: '50+', label: 'Countries Served' },
    { id: 4, number: '24/7', label: 'Support Available' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Chief Executive Officer',
      image: '/team/ceo.jpg', // Placeholder image path
      bio: 'With over 20 years of experience in security systems.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      image: '/team/cto.jpg', // Placeholder image path
      bio: 'Leading innovation in AI-powered surveillance solutions.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Head of Product Development',
      image: '/team/head-product.jpg', // Placeholder image path
      bio: 'Expert in creating user-friendly security products.'
    }
  ];

  const certifications = [
    { id: 1, name: 'ISO 9001:2015', description: 'Quality Management System' },
    { id: 2, name: 'ISO 27001', description: 'Information Security Management' },
    { id: 3, name: 'UL Certified', description: 'Safety Standards Compliance' }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About AKvision</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            AKvision is a leading provider of innovative security solutions, dedicated to making the world safer through cutting-edge surveillance technology and exceptional service.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide innovative and reliable security solutions that protect people, property, and assets while delivering exceptional customer service and maintaining the highest standards of quality.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the global leader in security technology, recognized for our innovation, reliability, and commitment to making the world a safer place through advanced surveillance solutions.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  {/* Placeholder for team member image */}
                  <div className="flex items-center justify-center h-64 bg-gray-100">
                    <UserGroupIcon className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center bg-white rounded-lg p-6 shadow-md">
                <CheckBadgeIcon className="h-12 w-12 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-bold">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="mb-6">We're always looking for talented individuals to join our growing team.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;