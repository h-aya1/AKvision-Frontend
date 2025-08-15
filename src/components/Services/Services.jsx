import { WrenchScrewdriverIcon, ClipboardDocumentCheckIcon, AcademicCapIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      id: 'installation',
      title: 'Professional Installation',
      icon: <WrenchScrewdriverIcon className="h-12 w-12 text-primary" />,
      description: 'Expert installation of security systems by certified technicians.',
      features: [
        'Site survey and planning',
        'Professional mounting and wiring',
        'System configuration and testing',
        'Post-installation support'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      icon: <ClipboardDocumentCheckIcon className="h-12 w-12 text-primary" />,
      description: 'Regular maintenance and support services to ensure optimal system performance.',
      features: [
        'Scheduled maintenance visits',
        '24/7 technical support',
        'System health monitoring',
        'Emergency repairs'
      ]
    },
    {
      id: 'training',
      title: 'Training & Consultation',
      icon: <AcademicCapIcon className="h-12 w-12 text-primary" />,
      description: 'Comprehensive training programs for system operators and security staff.',
      features: [
        'Operator training sessions',
        'Security best practices',
        'System optimization tips',
        'Custom workflow setup'
      ]
    },
    {
      id: 'support',
      title: 'Customer Support',
      icon: <PhoneIcon className="h-12 w-12 text-primary" />,
      description: 'Dedicated customer support team available to assist you.',
      features: [
        'Phone and email support',
        'Remote troubleshooting',
        'Warranty service',
        'Product upgrades'
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support services to ensure your security system operates at peak performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Initial Consultation', description: 'Discuss your needs and requirements' },
              { step: 2, title: 'Site Assessment', description: 'Evaluate your location and existing systems' },
              { step: 3, title: 'Service Delivery', description: 'Execute the service with expert precision' },
              { step: 4, title: 'Follow-up Support', description: 'Ensure complete satisfaction and system optimization' }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-primary rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
          <p className="mb-6">Our team is ready to help you with any service-related inquiries.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Service
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;