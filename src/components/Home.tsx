import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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
    <div className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-primary-400 to-blue-600 flex items-center justify-center"
          >
            <img
              src="/profile.jpg" // Place your photo as 'public/profile.jpg'
              alt="Hemanth Naga Sai Bolisetty"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="gradient-text">Hemanth Naga Sai Bolisetty</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Software Developer
          </motion.h2>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experienced software developer with expertise in full-stack development, 
            backend APIs, and data visualizations. Passionate about creating 
            innovative solutions and delivering exceptional user experiences.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${link.color} hover:scale-110`}
                aria-label={link.name}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 