import React from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
export default function AboutPage() {
  
    return (
     
      <section className="pt-24 pb-16 relative overflow-hidden bg-white">
       <Header />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              What is Maasi?
            </h1>
            <Image src="/logo.jpeg" alt="Maasi logo" width={64} height={64} className="w-12 h-12 sm:w-16 sm:h-16 object-contain animate-pulse" />
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
            <p>
              Maasi is a community app designed to help people in Maastricht connect more easily through shared interests, events, and everyday social motion.
            </p>
            <div className="bg-white/70 p-6 rounded-2xl shadow-sm border border-orange-100">
              <p className="italic text-gray-600">
                &ldquo;I struggled to make real friends when I first got here. It wasn&rsquo;t until my 3rd and 4th year that I finally found people I genuinely clicked with. I built Maasi so others wouldn&rsquo;t have to wait that long.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  