import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Database, Cpu } from 'lucide-react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      company: 'Vizworld Inc.',
      companyUrl: 'https://vizworld.com/',
      position: 'Software Developer',
      period: 'Jun 2025 – Current',
      location: 'Remote',
      description: 'Full-stack development role focusing on building scalable web applications and student opportunity portals.',
      technologies: ['Next.js', 'Tailwind CSS', 'Django', 'Vercel','PostgreSQL', 'CI/CD', 'REST APIs', 'Postman'],
      achievements: [
        'Boosted productivity 30% by delivering a full-stack student portal using Next.js, Tailwind, Django, and Supabase.',
        'Achieved 100% API uptime by building Django REST endpoints and integrating PostgreSQL/Supabase.',
        'Cut release time 25% using automated CI/CD on Vercel with Git-based rollback and staging.',
        'Secured platform via JWT role access, CORS, and input validation on backend and frontend.',
        'Collaborated with product and QA teams to prioritize backlog, resolve bugs, and deliver sprint goals on time.'
      ],
      icon: Code
    },
    {
      company: 'TCS',
      companyUrl: 'https://www.tcs.com/',
      position: 'Software Engineer',
      period: 'Nov 2021 – Jun 2023',
      location: 'Hyderabad, India',
      description: 'Built Spring Boot microservices and Kafka pipelines for automotive safety systems in an Agile environment.',
      technologies: [
'Spring Boot', 'Kafka', 'Kafka Streams', 'Postman', 'OAuth 2.0 / OIDC / JWT', 'Jenkins', 'Docker', 'Git'],
      achievements: [
        'Delivered high-quality automotive safety software in Agile; developed and maintained multiple Spring Boot APIs with 15+ routes, validated via Postman.',
        'Improved Kafka-based ECU data processing by implementing distributed consumers, increasing throughput 30% and reducing latency from 3.5s to 0.7s.',
        'Built a Spring Boot microservice for real-time vehicle sensor data using Kafka Streams, enabling scalable and fault-tolerant diagnostics handling.',
        'Secured APIs and microservices with OAuth 2.0, OpenID Connect, and JWT authentication for industry-standard access control.',
        'Coordinated with cross-functional teams to implement scalable architecture changes for ECU modules.',
        'Implemented and optimized a CI/CD pipeline for seamless software delivery, utilizing Jenkins, Docker, and Git.',
        'Wrote and maintained unit, regression, and functional test suites to catch defects before release.',
        'Led a two-person team to bootstrap a new microservice from RFC to first production release.'
      ],
      icon: Cpu
    },
    {
      company: 'CueMath',
      companyUrl: 'https://www.cuemath.com/',
      position: 'Software Developer',
      period: 'Jan 2021 – Jun 2021',
      location: 'Remote',
      description: 'Worked on JavaScript-based learning platforms with a focus on performance, analytics, and content integration.',
      technologies: ['JavaScript', 'GeoGebra', 'Web Development', 'Educational Tech', 'Performance', 'User Analytics',],
      achievements: [
        'Improved app performance by debugging and optimizing JavaScript-based learning platforms.',
        'Researched user interaction data and provided insights that guided curriculum updates and new feature development.',
        'Integrated new content modules via REST APIs, ensuring seamless backend communication and data consistency.'
      ],
      icon: Database
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
              <Briefcase className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey through various roles and the impact I've made
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experienceData.length - 1 && (
                <div className="hidden md:block absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-primary-400 to-primary-600"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon and Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                    <experience.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-lg text-primary-600 font-medium mb-2">
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center"
                        >
                          <span>{experience.company}</span>
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      ) : (
                        <>
                          <span>{experience.company}</span>
                          <ExternalLink size={16} className="ml-2" />
                        </>
                      )}
                    </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{experience.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies & Tools:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Professional Growth
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Major Projects Delivered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 