
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="hero-pattern absolute inset-0 opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Build beautiful websites</span>
              <span className="block text-primary">like never before</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Create stunning, responsive websites with our simple yet powerful platform. No coding required.
            </p>
            <div className="mt-8 sm:mt-12 flex justify-center">
              <div className="rounded-md shadow">
                <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-base font-medium">
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="ml-3">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 text-base font-medium">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
