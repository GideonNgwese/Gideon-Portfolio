'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Brain, Cpu, Zap, Database, Network, Sparkles, Bot, Code } from 'lucide-react'

const aiCapabilities = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building predictive models and neural networks for complex problem-solving',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
  },
  {
    icon: Bot,
    title: 'LLM Integration',
    description: 'Implementing GPT-4 and other language models for intelligent applications',
    technologies: ['OpenAI API', 'LangChain', 'Prompt Engineering'],
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Creating automated workflows and intelligent process optimization',
    technologies: ['Python', 'Airflow', 'N8N'],
  },
  {
    icon: Database,
    title: 'Computer Vision',
    description: 'Developing image recognition and visual analysis systems',
    technologies: ['OpenCV', 'YOLO', 'MediaPipe'],
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description: 'Designing and training deep learning architectures',
    technologies: ['Keras', 'TensorFlow', 'PyTorch'],
  },
  {
    icon: Code,
    title: 'AI APIs',
    description: 'Building and deploying scalable AI-powered APIs',
    technologies: ['FastAPI', 'Docker', 'AWS'],
  },
]

export function AIShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const [pulseActive, setPulseActive] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseActive(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section id="ai" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
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
            AI & Machine Learning
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pioneering the future with intelligent systems and cutting-edge AI technology
          </p>
        </motion.div>
        
        {/* Digital Brain Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-96 mb-16 flex items-center justify-center"
        >
          {/* Central Brain */}
          <motion.div
            animate={{
              scale: pulseActive ? 1.1 : 1,
              rotate: pulseActive ? 360 : 0,
            }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="relative w-48 h-48"
          >
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border-2 border-purple-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border-2 border-cyan-500/30"
            />
            
            {/* Center */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-16 h-16 text-white" />
            </div>
            
            {/* Pulsing Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute inset-0 rounded-full border border-blue-400/50"
              />
            ))}
          </motion.div>
          
          {/* Floating Nodes */}
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * Math.PI * 2
            const radius = 150
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            
            return (
              <motion.div
                key={i}
                animate={{
                  x: [x, x + Math.sin(Date.now() / 1000 + i) * 20],
                  y: [y, y + Math.cos(Date.now() / 1000 + i) * 20],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
            )
          })}
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * Math.PI * 2
              const radius = 150
              const x = Math.round(Math.cos(angle) * radius + 192)
              const y = Math.round(Math.sin(angle) * radius + 192)
              
              return (
                <motion.line
                  key={i}
                  x1={192}
                  y1={192}
                  x2={x}
                  y2={y}
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              )
            })}
          </svg>
        </motion.div>
        
        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {capability.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {capability.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {capability.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
