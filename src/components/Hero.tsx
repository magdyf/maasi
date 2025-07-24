"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Mail, ArrowRight } from 'lucide-react';

const HeroWithSignup = () => {
  // Video cycling logic
  const videoFiles = ["/assets/vid.mp4", "/assets/vid1.mp4", "/assets/vid2.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Signup form logic
  const [email, setEmail] = useState('');
  const [showInterests, setShowInterests] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    'Going out', 'Basketball', 'Skateboarding', 'Football', 'Cooking',
    'Photography', 'Music', 'Art', 'Reading', 'Gaming', 'Fitness', 'Travel'
  ];

  // iOS Safari video autoplay fix
  const forceVideoPlay = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    }
  };

  const handleVideoCanPlay = () => {
    forceVideoPlay();
  };

  const handleVideoLoadedData = () => {
    forceVideoPlay();
  };

  const handleUserInteraction = () => {
    forceVideoPlay();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoFiles.length);
    }, 6000); // Change video every 6 seconds
    return () => clearInterval(interval);
  }, [videoFiles.length]);

  // Force play when video changes (iOS Safari fix)
  useEffect(() => {
    const timer = setTimeout(() => {
      forceVideoPlay();
    }, 100); // Small delay to ensure video is ready
    return () => clearTimeout(timer);
  }, [currentVideo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email sanitization: trim, remove dangerous chars, and validate
    const sanitizedEmail = email.trim().replace(/[<>'"/\\]/g, "");
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (sanitizedEmail && emailRegex.test(sanitizedEmail)) {
      setEmail(sanitizedEmail);
      setShowInterests(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleFinalSubmit = () => {
    console.log('Email:', email);
    console.log('Interests:', selectedInterests);
    // Here you would typically send the data to your backend
    alert('Thank you for signing up! We\'ll keep you updated.');
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          key={videoFiles[currentVideo]}
          className="w-full h-full object-cover"
          src={videoFiles[currentVideo]}
          autoPlay
          loop
          muted
          playsInline
          webkitPlaysinline={true}
          preload="metadata"
          onCanPlay={handleVideoCanPlay}
          onLoadedData={handleVideoLoadedData}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
                
      {/* Content overlay */}
      <div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
        onClick={handleUserInteraction}
        onTouchStart={handleUserInteraction}
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Hero Content */}
          <div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                What is Maasi?
              </h1>
              <Image
                src="/logo.jpeg"
                alt="Maasi logo"
                width={64}
                height={64}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain animate-pulse"
              />
            </div>
                              
            <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-white leading-relaxed mb-12">
              <p>
                Maasi is a community app designed to help people in Maastricht connect more easily through shared interests, events, and everyday social motion.
              </p>
                                
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30">
                <p className="italic text-white/90">
                  &ldquo;I struggled to make real friends when I first got here. It wasn&rsquo;t until my 3rd and 4th year that I finally found people I genuinely clicked with. I built Maasi so others wouldn&rsquo;t have to wait that long.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20">
              {!showInterests ? (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Sign up to be notified</h2>
                    <p className="text-white/90">Be the first to know when Maasi launches in Maastricht</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.replace(/[<>'"/\\]/g, ""))}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-lg text-white placeholder-white/70"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2 group shadow-lg"
                    >
                      <span>Get Notified</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      What interests you most?
                    </h3>
                    <p className="text-white/80">Select all that apply - this helps us create better connections</p>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-3 rounded-full border-2 transition-all duration-200 font-medium ${
                          selectedInterests.includes(interest)
                            ? 'bg-orange-500 border-orange-500 text-white shadow-lg'
                            : 'bg-white/10 border-white/30 text-white hover:border-orange-400 hover:bg-white/20 backdrop-blur-sm'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={handleFinalSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg"
                  >
                    Complete Signup
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroWithSignup;