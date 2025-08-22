import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:hbolise2@asu.edu',
      icon: Mail,
      color: 'hover:text-red-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hemanthnagasaibolisetty',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/HemanthNagaSai-B',
      icon: Github,
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Hemanth Bolisetty
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Software Developer & Full-Stack Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 ${link.color} hover:scale-110`}
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              <a href="mailto:hbolise2@asu.edu" className="hover:text-primary-600 transition-colors">
                hbolise2@asu.edu
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Tempe, Arizona
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Hemanth Naga Sai Bolisetty. All rights reserved.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Home
            </a>
            <a href="/education" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Education
            </a>
            <a href="/experience" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Experience
            </a>
            <a href="/skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Skills
            </a>
            <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Projects
            </a>
            <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 