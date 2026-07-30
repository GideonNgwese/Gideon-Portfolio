'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Code, Database, Cpu, Layers, Globe, Server, Smartphone, Zap, Terminal, Palette, Layout, Box, Cloud, GitBranch, Shield, Cog } from 'lucide-react'

interface SkillCard {
  id: string
  name: string
  category: string
  experience: string
  projects: number
  years: number
  icon: any
  description: string
  color: string
}

const skills: SkillCard[] = [
  { 
    id: '1', 
    name: 'React', 
    category: 'Frontend', 
    experience: 'Expert', 
    projects: 25, 
    years: 4, 
    icon: Code, 
    description: 'Building modern, responsive web applications',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    id: '2', 
    name: 'Next.js', 
    category: 'Frontend', 
    experience: 'Expert', 
    projects: 20, 
    years: 3, 
    icon: Layers, 
    description: 'Full-stack React framework for production apps',
    color: 'from-slate-500 to-slate-700'
  },
  { 
    id: '3', 
    name: 'TypeScript', 
    category: 'Languages', 
    experience: 'Expert', 
    projects: 30, 
    years: 4, 
    icon: Terminal, 
    description: 'Type-safe JavaScript for scalable apps',
    color: 'from-blue-600 to-blue-800'
  },
  { 
    id: '4', 
    name: 'PHP', 
    category: 'Languages', 
    experience: 'Advanced', 
    projects: 18, 
    years: 3, 
    icon: Code, 
    description: 'Server-side scripting and web development',
    color: 'from-indigo-500 to-purple-600'
  },
  { 
    id: '5', 
    name: 'Node.js', 
    category: 'Backend', 
    experience: 'Advanced', 
    projects: 15, 
    years: 3, 
    icon: Server, 
    description: 'Server-side JavaScript runtime and APIs',
    color: 'from-green-500 to-emerald-600'
  },
  { 
    id: '6', 
    name: 'Python', 
    category: 'Languages', 
    experience: 'Advanced', 
    projects: 10, 
    years: 3, 
    icon: Code, 
    description: 'Data science, automation, and backend',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    id: '7', 
    name: 'PostgreSQL', 
    category: 'Database', 
    experience: 'Advanced', 
    projects: 12, 
    years: 3, 
    icon: Database, 
    description: 'Advanced relational database management',
    color: 'from-blue-700 to-indigo-800'
  },
  { 
    id: '8', 
    name: 'MySQL', 
    category: 'Database', 
    experience: 'Advanced', 
    projects: 14, 
    years: 3, 
    icon: Database, 
    description: 'Popular relational database system',
    color: 'from-orange-600 to-amber-700'
  },
  { 
    id: '9', 
    name: 'MongoDB', 
    category: 'Database', 
    experience: 'Intermediate', 
    projects: 8, 
    years: 2, 
    icon: Database, 
    description: 'NoSQL database for flexible data models',
    color: 'from-green-600 to-teal-700'
  },
  { 
    id: '10', 
    name: 'Supabase', 
    category: 'Backend', 
    experience: 'Advanced', 
    projects: 10, 
    years: 2, 
    icon: Server, 
    description: 'Open-source Firebase alternative with PostgreSQL',
    color: 'from-emerald-500 to-green-600'
  },
  { 
    id: '11', 
    name: 'AWS', 
    category: 'Cloud', 
    experience: 'Intermediate', 
    projects: 6, 
    years: 2, 
    icon: Cloud, 
    description: 'Cloud infrastructure and deployment',
    color: 'from-orange-500 to-red-500'
  },
  { 
    id: '12', 
    name: 'Docker', 
    category: 'DevOps', 
    experience: 'Intermediate', 
    projects: 5, 
    years: 2, 
    icon: Cpu, 
    description: 'Containerization and orchestration',
    color: 'from-blue-400 to-cyan-500'
  },
  { 
    id: '13', 
    name: 'Tailwind CSS', 
    category: 'Frontend', 
    experience: 'Expert', 
    projects: 20, 
    years: 3, 
    icon: Palette, 
    description: 'Utility-first CSS framework',
    color: 'from-cyan-400 to-blue-500'
  },
  { 
    id: '14', 
    name: 'React Native', 
    category: 'Mobile', 
    experience: 'Intermediate', 
    projects: 4, 
    years: 1, 
    icon: Smartphone, 
    description: 'Cross-platform mobile development',
    color: 'from-purple-500 to-indigo-600'
  },
]

export function InteractiveSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [hoveredSkill, setHoveredSkill] = useState<SkillCard | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  
  const categories = ['All', ...new Set(skills.map(skill => skill.category))]
  
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  
  return (
    <section id="skills" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
            Technology Ecosystem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise, spanning frontend, backend, 
            cloud infrastructure, and cutting-edge development practices
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4 overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-display font-bold text-base text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-1">
                      {skill.description}
                    </p>
                    
                    {/* Experience Badge */}
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-[10px] font-semibold bg-gradient-to-r ${skill.color} text-white rounded-full`}>
                        {skill.experience}
                      </span>
                      <span className="text-[10px] text-gray-500">
                        {skill.years}y
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 text-[9px] font-medium bg-white/5 text-gray-400 rounded border border-white/5">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Skills', value: skills.length, color: 'from-blue-500 to-cyan-500' },
            { label: 'Years Experience', value: '4+', color: 'from-purple-500 to-pink-500' },
            { label: 'Projects Completed', value: '50+', color: 'from-green-500 to-emerald-500' },
            { label: 'Categories', value: categories.length - 1, color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
