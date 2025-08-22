import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'ASU Email',
      value: 'hbolise2@asu.edu',
      link: 'mailto:hbolise2@asu.edu',
      color: 'text-red-500'
    },
    {
      icon: Mail,
      title: 'Personal Email',
      value: 'hemanthnagasai1999@gmail.com',
      link: 'mailto:hemanthnagasai1999@gmail.com',
      color: 'text-orange-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/hemanthnagasaibolisetty',
      link: 'https://linkedin.com/in/hemanthnagasaibolisetty',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/HemanthNagaSai-B',
      link: 'https://github.com/HemanthNagaSai-B',
      color: 'text-gray-700 dark:text-gray-300'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tempe, Arizona',
      link: null,
      color: 'text-green-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="section-padding pt-20">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              <Mail className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects
          </p>
        </motion.div>

        {/* Contact Information - responsive 1 / 2 column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <div className={`p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-3 ${info.color}`}>
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline break-all"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Download Resume */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full max-w-xl mx-auto text-center p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl border border-primary-200 dark:border-primary-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Download Resume
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Get a detailed overview of my experience, skills, and achievements
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Download size={20} className="mr-2" />
            Download PDF Resume
          </a>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm passionate about creating innovative solutions and delivering exceptional user experiences. 
              Whether you have a project in mind, want to discuss potential opportunities, or just want to 
              connect, I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                Data Visualization
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                API Development
              </span>
              <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                Machine Learning
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
