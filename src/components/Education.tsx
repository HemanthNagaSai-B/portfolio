import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'Arizona State University',
      degree: 'M.S. in Computer Software Engineering',
      period: 'Aug 2023 – May 2025',
      gpa: '3.6',
      location: 'Tempe, Arizona',
      description: 'Focused on full-stack engineering, data visualization, and disciplined testing. Treated code quality and maintainability as core outcomes.',
      achievements: [
        'Built and shipped full-stack coursework prototypes used for class deliverables.',
        'Practiced Agile workflows: sprints, code reviews, and issue tracking.',
        'Designed responsive UIs with attention to accessibility basics.',
        'Collaborated with peers and faculty; iterated based on structured demos and feedback.'
      ],
      positions: [
        {
          title: 'Graduate Student Assembly Member, Graduate Student Government (ASU)',
          details: [
            'Proposed transit schedule and route expansions adopted for 500+ graduate students.',
            'Represented graduate academic and professional concerns in university policy discussions.',
            'Helped add essential supplies and services at the library—printing services, pens, hand sanitizer, and device chargers etc.'
          ]
        }
      ],
      coursework: [
        'Advanced Data Structures & Algorithms',
        'Data Visualization',
        'Mobile Systems Development',
        'Semantic Web Engineering',
        'Software Verification, Validation and Testing',
        'Software Design and Architecture',
        'Game Programming and Design',
        'Foundations of Software Engineering',
      ]
    },
    {
      institution: 'BITS Pilani, Hyderabad',
      degree: 'B.E. in Electronics and Communication Engineering',
      period: 'June 2017 – Aug 2021',
      gpa: '6.5',
      location: 'Hyderabad, India',
      description: 'Built a strong ECE foundation and shifted toward software through hands-on coding and campus initiatives.',
      achievements: [
        'Completed core ECE and CS coursework; strengthened programming fundamentals.',
        'Built small Android and blockchain prototypes as learning exercises.',
        'Participated in technical clubs and workshops; presented mini projects.',
        'NIRMAAN — volunteered in community outreach, donation drives, and weekend tutoring.'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Cryptography',
        'Operating Systems',
        'C Programming',
        'Neural Networks and Fuzzy Logic'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
              <GraduationCap className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Education</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex-row gap-8 items-center`}
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 to-primary-600"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  {/* Institution Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {education.institution}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {education.degree}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>{education.period}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{education.location}</span>
                  </div>

                  {/* GPA */}
                  <div className="flex items-center mb-4">
                    <Award size={16} className="mr-2 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      GPA: <span className="font-semibold text-primary-600">{education.gpa}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {education.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {education.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  

                  {/* Position of Responsibility */}
                  {education.positions && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Position of Responsibility:
                      </h4>
                      {education.positions.map((pos, idx) => (
                        <div key={idx} className="mb-2">
                          <div className="font-medium text-primary-700 dark:text-primary-300">{pos.title}</div>
                          <ul className="space-y-1">
                            {pos.details.map((detail, i) => (
                              <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                                <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Relevant Coursework */}
                  {education.coursework && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Relevant Coursework:
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {education.coursework.map((course, idx) => (
                          <li
                            key={idx}
                            className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I believe in lifelong learning and continuously update my skills through 
              online courses, workshops, and staying current with industry trends. 
              My educational background provides a strong foundation for tackling 
              complex software engineering challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
