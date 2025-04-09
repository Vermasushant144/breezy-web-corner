
import React from 'react';
import { Monitor, Smartphone, Layout, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    name: 'Responsive Design',
    description: 'All templates are fully responsive and look great on any device.',
    icon: <Monitor className="h-6 w-6" />
  },
  {
    name: 'Mobile Optimized',
    description: 'Optimized for mobile with touch-friendly interfaces.',
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    name: 'Beautiful Templates',
    description: 'Choose from dozens of professionally designed templates.',
    icon: <Layout className="h-6 w-6" />
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized for speed to ensure your website loads quickly.',
    icon: <Zap className="h-6 w-6" />
  },
  {
    name: 'Secure by Default',
    description: 'Built with security in mind to protect your data.',
    icon: <Shield className="h-6 w-6" />
  },
  {
    name: 'Team Collaboration',
    description: 'Work together with your team to build amazing websites.',
    icon: <Users className="h-6 w-6" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features for modern websites
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to create stunning websites that convert visitors into customers.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="text-primary">{feature.icon}</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
