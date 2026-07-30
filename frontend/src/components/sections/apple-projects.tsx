'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Star, Zap } from 'lucide-react'
import { PremiumButton } from '@/components/ui/premium-button'

const projects = [
  {
    id: 1,
    title: 'CHUITECHMa Voting Management System',
    description: 'A comprehensive voting management system built for CHUITECHMa school, featuring secure student voting, real-time results, and admin dashboard for election management.',
    image: '/placeholder-voting.jpg',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    stats: { voters: '500+', elections: '12+', accuracy: '100%' },
    featured: true,
    github: 'https://github.com/GideonNgwese/chuitechma-voting',
    live: 'https://midian.free.nf',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: '/placeholder-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    stats: { users: '10K+', revenue: '$500K+', uptime: '99.9%' },
    featured: true,
    github: 'https://github.com/GideonNgwese/ecommerce-platform',
    live: 'https://demo-ecommerce.example.com',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A Trello-like task management application with drag-and-drop functionality, real-time collaboration, and team workspaces.',
    image: '/placeholder-2.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    stats: { users: '5K+', tasks: '100K+', teams: '500+' },
    featured: true,
    github: 'https://github.com/GideonNgwese/task-app',
    live: 'https://tasks.example.com',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides accurate forecasts based on user location with hourly/daily forecasts and severe weather alerts.',
    image: '/placeholder-3.jpg',
    technologies: ['Next.js', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    stats: { users: '20K+', forecasts: '1M+', accuracy: '95%' },
    featured: false,
    github: 'https://github.com/GideonNgwese/weather-dashboard',
    live: 'https://weather.example.com',
  },
  {
    id: 5,
    title: 'Portfolio Generator',
    description: 'An AI-powered tool that generates professional portfolio websites based on user input using GPT-4 for content generation.',
    image: '/placeholder-4.jpg',
    technologies: ['Next.js', 'OpenAI API', 'Vercel', 'Supabase'],
    stats: { users: '2K+', portfolios: '5K+', generated: '10K+' },
    featured: true,
    github: 'https://github.com/GideonNgwese/portfolio-generator',
    live: 'https://portfolio-gen.example.com',
  },
]

export function AppleProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work, built with cutting-edge technology and exceptional attention to detail
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                {/* Image Preview */}
                <div className="relative h-64 bg-gradient-to-br from-blue-900/30 to-purple-900/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
                        <span className="text-4xl font-display font-bold text-white">{project.title[0]}</span>
                      </div>
                      <p className="text-white/40 text-sm">Live Preview Available</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6"
                  >
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-display text-xl font-bold text-white">{value}</div>
                        <div className="text-gray-500 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 3D Hover Effect */}
                <motion.div
                  animate={{
                    rotateX: hoveredProject === project.id ? 5 : 0,
                    rotateY: hoveredProject === project.id ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <PremiumButton variant="glass" size="lg">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </PremiumButton>
        </motion.div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
