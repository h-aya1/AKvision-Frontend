import { useState } from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const Legal = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'returns', label: 'Return Policy' }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Important information about our policies and terms of service.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="border border-gray-200 rounded-lg flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-sm font-medium ${activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <DocumentTextIcon className="h-12 w-12 text-primary mx-auto mb-6" />

          {/* Privacy Policy */}
          {activeTab === 'privacy' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
              
              <div className="space-y-6 text-gray-600">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Information Collection</h3>
                  <p>
                    We collect information that you provide directly to us, including when you create an account,
                    make a purchase, sign up for our newsletter, or contact us for support. This may include:
                  </p>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Name and contact information</li>
                    <li>Billing and shipping information</li>
                    <li>Account credentials</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">2. Use of Information</h3>
                  <p>
                    We use the collected information to provide, maintain, and improve our services,
                    process your transactions, communicate with you, and send you marketing communications
                    (subject to your preferences).
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Information Sharing</h3>
                  <p>
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Service providers who assist in our operations</li>
                    <li>Law enforcement when required by law</li>
                    <li>Business partners with your consent</li>
                  </ul>
                </section>
              </div>
            </div>
          )}

          {/* Terms of Service */}
          {activeTab === 'terms' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
              
              <div className="space-y-6 text-gray-600">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using our website and services, you agree to be bound by these
                    Terms of Service and all applicable laws and regulations.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">2. Use License</h3>
                  <p>
                    Permission is granted to temporarily download one copy of the materials for personal,
                    non-commercial transitory viewing only.
                  </p>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>This is a license, not a transfer of title</li>
                    <li>You may not modify or copy the materials</li>
                    <li>You may not use the materials for commercial purposes</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Disclaimer</h3>
                  <p>
                    The materials on our website are provided on an 'as is' basis. We make no
                    warranties, expressed or implied, and hereby disclaim and negate all other warranties
                    including, without limitation, implied warranties or conditions of merchantability.
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* Return Policy */}
          {activeTab === 'returns' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Return Policy</h2>
              
              <div className="space-y-6 text-gray-600">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Return Period</h3>
                  <p>
                    We accept returns within 30 days of purchase for most products. Items must be unused
                    and in their original packaging with all accessories included.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">2. Return Process</h3>
                  <ol className="list-decimal list-inside mt-2 ml-4 space-y-2">
                    <li>Contact our customer service to initiate a return</li>
                    <li>Receive a Return Merchandise Authorization (RMA) number</li>
                    <li>Package the item securely with all original materials</li>
                    <li>Include the RMA number on the outside of the package</li>
                    <li>Ship the item to the provided return address</li>
                  </ol>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Refund Process</h3>
                  <p>
                    Once we receive and inspect the returned item, we will process your refund within
                    5-7 business days. The refund will be issued to the original payment method.
                  </p>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Original shipping charges are non-refundable</li>
                    <li>Return shipping costs are the responsibility of the customer</li>
                    <li>Restocking fees may apply for certain items</li>
                  </ul>
                </section>
              </div>
            </div>
          )}

          {/* Last Updated */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500 text-center">
            Last updated: March 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;