import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const AboutContent: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/sade25', ariaLabel: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/sadeahmed', ariaLabel: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:ahmed.856@osu.edu', ariaLabel: 'Email' }
  ];

  return (
    <div className="about-container flex gap-8 p-5">
      <div className="profile-image w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0">
        <img 
          src="/IMG_2444.JPG" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bio-content flex-grow">
        <h2 className="text-2xl font-bold text-[#2a5a85] mb-2">Sade A.</h2>
        <h3 className="text-xl mb-3 text-gray-700">Software Engineer</h3>
        <p className="mb-4 text-gray-600 leading-relaxed">
          Software Engineer with a B.S. in Computer Science & Engineering from The Ohio State University.
          Currently working at Amazon on the Transportation team.
        </p>
        
        <div className="social-links flex gap-4 mt-5">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="social-link w-10 h-10 rounded-full bg-[#3a6ea5] text-white flex items-center justify-center no-underline text-lg transition-transform duration-300 hover:-translate-y-1"
              aria-label={link.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;