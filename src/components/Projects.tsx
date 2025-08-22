import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink, Github, Database, Globe, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Faculty/TA Matching Platform',
      description: 'A comprehensive platform that matches faculty members with teaching assistants using machine learning algorithms. Features role-based JWT authentication and intelligent ranking system.',
      technologies: ['React', 'Flask', 'Supabase', 'JWT', 'ML', 'TF-IDF', 'SVM'],
      features: [
        'Role-based authentication with JWT tokens',
        'ML-based ranking using TF-IDF and SVM algorithms',
        'Real-time matching and notification system',
        'Responsive design with modern UI/UX'
      ],
      github: 'https://github.com/hemanthbolisetty/faculty-ta-matching',
      live: 'https://faculty-ta-matching.vercel.app',
      icon: Database,
      category: 'Full-Stack'
    },
    {
      title: 'CrickViz',
      description: 'Interactive cricket data visualization platform featuring 240K+ IPL records with multiple chart types, advanced filters, and hover popups for detailed insights.',
      technologies: ['D3.js', 'HTML/CSS', 'JavaScript', 'Data Visualization'],
      features: [
        '6 different chart types for comprehensive analysis',
        'Advanced filtering and search capabilities',
        'Interactive hover popups with detailed statistics',
        'Responsive design for all devices'
      ],
      github: 'https://github.com/hemanthbolisetty/crickviz',
      live: 'https://crickviz.vercel.app',
      icon: BarChart3,
      category: 'Data Visualization'
    },
    {
      title: 'Air Quality Tracker',
      description: 'Semantic web application for tracking air quality data using ontology-based queries and SPARQL endpoints for fast and efficient data retrieval.',
      technologies: ['Node.js', 'Stardog', 'SPARQL', 'Semantic Web', 'RDF/OWL'],
      features: [
        'Semantic web ontology for data modeling',
        'Fast SPARQL queries for data retrieval',
        'Real-time air quality monitoring',
        'Intuitive user interface for data exploration'
      ],
      github: 'https://github.com/hemanthbolisetty/air-quality-tracker',
      live: 'https://air-quality-tracker.vercel.app',
      icon: Globe,
      category: 'Semantic Web'
    },
    {
      title: 'Scrum Simulator',
      description: 'Agile project management simulator with comprehensive REST APIs, PostgreSQL database, and extensive test coverage for reliable project tracking.',
      technologies: ['Node.js', 'PostgreSQL', 'REST APIs', 'Jest', 'Testing'],
      features: [
        'Complete REST API implementation',
        'PostgreSQL database with optimized queries',
        '95% Jest test coverage for reliability',
        'Agile methodology simulation tools'
      ],
      github: 'https://github.com/hemanthbolisetty/scrum-simulator',
      live: 'https://scrum-simulator.vercel.app',
      icon: FolderOpen,
      category: 'Backend'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
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
              <FolderOpen className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              {/* Project Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                      <project.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Project Highlights
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies Used</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                <div className="text-gray-600 dark:text-gray-300">Test Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">240K+</div>
                <div className="text-gray-600 dark:text-gray-300">Data Records</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's work together to bring your ideas to life!
            </p>
            <a
              href="mailto:hbolise2@asu.edu"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 