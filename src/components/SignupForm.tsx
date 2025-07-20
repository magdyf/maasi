"use client";
import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [showInterests, setShowInterests] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    'Going out', 'Basketball', 'Skateboarding', 'Football', 'Cooking',
    'Photography', 'Music', 'Art', 'Reading', 'Gaming', 'Fitness', 'Travel'
  ];

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
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Sign up to be notified</h2>
          <p className="text-black">Be the first to know when Maasi launches in Maastricht</p>
        </div>

        {!showInterests ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.replace(/[<>'"/\\]/g, ""))}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-lg text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
            >
              <span>Get Notified</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                What interests you most?
              </h3>
              <p className="text-gray-600">Select all that apply - this helps us create better connections</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`p-3 rounded-full border-2 transition-all duration-200 font-medium ${
                    selectedInterests.includes(interest)
                      ? 'bg-orange-500 border-orange-500 text-white'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleFinalSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
            >
              Complete Signup
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SignupForm;
