'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Star, Zap, Loader2 } from 'lucide-react'
import { PremiumButton } from '@/components/ui/premium-button'

export function AppleProjects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      if (!response.ok) throw new Error('Failed to fetch projects')
      const data = await response.json()
      // Filter only published projects
      const publishedProjects = data.filter((p: any) => p.status === 'published')
      setProjects(publishedProjects)
    } catch (error) {
      console.error('Failed to fetch projects:', error)
    } finally {
      setLoading(false)
    }
  }
  
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
        
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">No published projects yet</p>
          </div>
        ) : (
          <>
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
                  {project.preview_image ? (
                    <img
                      src={project.preview_image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover"
                    />
                  ) : project.live ? (
                    <iframe
                      src={project.live}
                      className="w-full h-full border-0"
                      title={`${project.title} Preview`}
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts allow-popups"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
                          <span className="text-4xl font-display font-bold text-white">{project.title[0]}</span>
                        </div>
                        <p className="text-white/40 text-sm">Coming Soon</p>
                      </div>
                    </div>
                  )}
                  
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
                    {project.technologies?.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-display text-xl font-bold text-white">{value as string}</div>
                          <div className="text-gray-500 text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}
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
        </>
        )}
        
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
