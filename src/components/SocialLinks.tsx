import React from 'react';
import { Instagram, MessageCircle, Mail, Play } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'from-pink-500 to-purple-500',
      hoverColor: 'hover:from-pink-600 hover:to-purple-600'
    },
    {
      name: 'Snapchat',
      icon: MessageCircle,
      href: '#',
      color: 'from-yellow-400 to-yellow-500',
      hoverColor: 'hover:frosm-yellow-500 hover:to-yellow-600'
    },
    {
      name: 'TikTok',
      icon: Play,
      href: '#',
      color: 'from-black to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-gray-900'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@maasi.app',
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:from-gray-700 hover:to-gray-800'
    }
  ];


  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-12">Follow us for updates, behind-the-scenes content, and community highlights</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1`}
            >
              <div className={`p-4 rounded-full bg-gradient-to-r ${link.color} ${link.hoverColor} transition-all duration-200 mb-4`}>
                <link.icon className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
