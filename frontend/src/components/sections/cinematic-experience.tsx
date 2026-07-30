'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'TechStartup Inc',
    role: 'Senior Full-Stack Developer',
    period: '2022 - Present',
    location: 'Remote',
    description: 'Leading development of scalable web applications, mentoring junior developers, and architecting microservices infrastructure.',
    achievements: [
      'Built e-commerce platform processing $500K+ monthly',
      'Reduced page load time by 60% through optimization',
      'Led team of 5 developers on major projects',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 2,
    company: 'Digital Agency',
    role: 'Full-Stack Developer',
    period: '2020 - 2022',
    location: 'San Francisco, CA',
    description: 'Developed custom web solutions for enterprise clients, implemented CI/CD pipelines, and optimized database performance.',
    achievements: [
      'Delivered 20+ client projects on time and under budget',
      'Implemented automated testing reducing bugs by 40%',
      'Built internal tools improving team productivity by 30%',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'Jenkins'],
  },
  {
    id: 3,
    company: 'EcoTech Solutions',
    role: 'Junior Developer',
    period: '2019 - 2020',
    location: 'Austin, TX',
    description: 'Started career building web applications, learning modern frameworks, and contributing to open-source projects.',
    achievements: [
      'Built company website from scratch',
      'Contributed to 3 open-source projects',
      'Learned 5+ programming languages in first year',
    ],
    technologies: ['JavaScript', 'Python', 'Vue.js', 'Firebase', 'Git'],
  },
]

export function CinematicExperience() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  
  return (
    <section id="experience" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
            Experience Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A cinematic timeline of my professional growth and achievements
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />
          
          {/* Experience Items */}
          <div className="space-y-24">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-black z-10" />
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500"
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        {experience.company}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    {/* Role */}
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
                        {experience.role}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {experience.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
