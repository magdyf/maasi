"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  // Video cycling logic
  const videoFiles = ["/assets/vid.mp4", "/assets/vid1.mp4", "/assets/vid2.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoFiles.length);
    }, 6000); // Change video every 6 seconds
    return () => clearInterval(interval);
  }, [videoFiles.length]);

  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          key={videoFiles[currentVideo]}
          className="w-full h-full object-cover"
          src={videoFiles[currentVideo]}
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: 0.25, background: 'black' }}
        />
      </div>
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

export default Hero;
