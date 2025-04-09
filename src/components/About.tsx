
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Our Platform
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              SimpleSite was founded with a simple mission: to make web design accessible to everyone. 
              Whether you're a business owner, creative professional, or just starting out, our platform 
              gives you the tools to create stunning websites without the technical hassle.
            </p>
            <div className="mt-6">
              <ul className="space-y-3">
                {[
                  'No coding knowledge required',
                  'Easy drag-and-drop interface',
                  'Professional templates designed by experts',
                  'Reliable hosting with 99.9% uptime',
                  'Friendly customer support available 24/7'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Button>Learn Our Story</Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-w-5 aspect-h-3 bg-primary/10 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <svg className="h-full w-full text-primary opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 16.938V19h5v-2.062A8.001 8.001 0 0112 4a8 8 0 00-6 13.938V19h5v-2.062A4.001 4.001 0 0116 12a4 4 0 00-3-3.87v2.062A2 2 0 0114 12a2 2 0 01-1 1.732v3.206zM12 14a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
