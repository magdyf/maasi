import React from 'react';
import Image from 'next/image';
import Header from "@/components/Header";

export default function SupportPage() {
  return (
    <main className="pt-24 pb-16 relative overflow-hidden">
      {/* Subtle background */}
        <Header />
        
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">How You Can Support</h1>
            <Image 
              src="/logo.jpeg" 
              alt="Maasi logo" 
              width={64} 
              height={64} 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain animate-pulse" 
            />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maasi grows stronger with every person who believes in building genuine connections. Here's how you can help us create something beautiful together.
          </p>
        </div>

        {/* Community Impact */}
        <div className="bg-white/70 p-8 rounded-2xl shadow-sm border border-gray-200 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Impact Matters</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Maasi thrives thanks to the support of our amazing community. Every time someone finds their first friend through our platform, discovers a new favorite spot, or feels truly welcomed in Maastricht, it's because people like you believed in our mission.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Together, we're not just building an app – we're creating a movement that transforms how people connect in our beautiful city.
          </p>
        </div>

        {/* Ways to Support */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ways You Can Help</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📢 Spread the Word</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Know someone new to Maastricht? A colleague feeling isolated? A classmate looking for their tribe? Share Maasi with them.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Tell friends about interesting events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Share your positive experiences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Invite newcomers to join activities</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Host Events</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Have a passion or skill to share? Create experiences that bring people together around what you love most.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Host cooking classes or game nights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Organize outdoor adventures</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Suggest local events and activities</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Share Ideas</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your feedback shapes Maasi's future. Help us understand what the community needs and wants to see.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Give us feedback to improve the platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Suggest new features or improvements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Share venue recommendations</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🤝 Volunteer</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Join our volunteer team and help create memorable experiences that make newcomers feel at home.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Help organize or moderate community events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Welcome new community members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>Assist with event coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/80 rounded-2xl p-8 text-center border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">
            Every connection made, every event hosted, and every kind gesture helps build the Maastricht community we all want to be part of.
          </p>
          <p className="text-lg text-gray-600">
            Every little bit helps us grow and serve the community better. Thank you for your support! 🧡
          </p>
        </div>
      </div>
    </main>
  );
}