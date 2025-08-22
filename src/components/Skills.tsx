import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C', proficiency: 90 },
        { name: 'Python', proficiency: 85 },
        { name: 'Java', proficiency: 80 },
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'TypeScript', proficiency: 85 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Zap,
      skills: [
        { name: 'React', proficiency: 90 },
        { name: 'Redux', proficiency: 80 },
        { name: 'Node.js', proficiency: 85 },
        { name: 'Django', proficiency: 80 },
        { name: 'Spring Boot', proficiency: 75 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', proficiency: 85 },
        { name: 'Supabase', proficiency: 80 },
        { name: 'PostgreSQL', proficiency: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: [
        { name: 'Git', proficiency: 90 },
        { name: 'Docker', proficiency: 80 },
        { name: 'Jenkins', proficiency: 75 },
        { name: 'Postman', proficiency: 85 },
        { name: 'Vercel', proficiency: 85 },
        { name: 'D3.js', proficiency: 80 },
        { name: 'Jest', proficiency: 80 },
        { name: 'SPARQL', proficiency: 75 },
        { name: 'RDF/OWL', proficiency: 70 }
      ]
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

  const ProgressBar: React.FC<{ proficiency: number; name: string }> = ({ proficiency, name }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${proficiency}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  );

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
              <Code className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical expertise and proficiency levels across various technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <ProgressBar
                    key={idx}
                    name={skill.name}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Additional Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Development</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• RESTful API Design</li>
                  <li>• Microservices Architecture</li>
                  <li>• Test-Driven Development</li>
                  <li>• Agile/Scrum Methodologies</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Data & Analytics</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Data Visualization</li>
                  <li>• Semantic Web Technologies</li>
                  <li>• Machine Learning Basics</li>
                  <li>• Statistical Analysis</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Soft Skills</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                  <li>• Technical Documentation</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-300">Languages</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-300">Frameworks</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-300">Databases</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">9</div>
              <div className="text-gray-600 dark:text-gray-300">Tools</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 