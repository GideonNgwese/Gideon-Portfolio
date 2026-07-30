'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Database, Cpu, Layers, Globe, Server, Smartphone, Zap } from 'lucide-react'

interface SkillNode {
  id: string
  name: string
  category: string
  experience: string
  projects: number
  years: number
  icon: any
  x: number
  y: number
  vx: number
  vy: number
}

const skills: SkillNode[] = [
  { id: '1', name: 'React', category: 'Frontend', experience: 'Expert', projects: 25, years: 4, icon: Code, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '2', name: 'Next.js', category: 'Frontend', experience: 'Expert', projects: 20, years: 3, icon: Layers, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '3', name: 'TypeScript', category: 'Languages', experience: 'Expert', projects: 30, years: 4, icon: Code, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '4', name: 'Node.js', category: 'Backend', experience: 'Advanced', projects: 15, years: 3, icon: Server, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '5', name: 'Python', category: 'Languages', experience: 'Advanced', projects: 10, years: 3, icon: Code, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '6', name: 'PostgreSQL', category: 'Database', experience: 'Advanced', projects: 12, years: 3, icon: Database, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '7', name: 'MongoDB', category: 'Database', experience: 'Intermediate', projects: 8, years: 2, icon: Database, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '8', name: 'AWS', category: 'Cloud', experience: 'Intermediate', projects: 6, years: 2, icon: Globe, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '9', name: 'Docker', category: 'DevOps', experience: 'Intermediate', projects: 5, years: 2, icon: Cpu, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '10', name: 'GraphQL', category: 'API', experience: 'Advanced', projects: 8, years: 2, icon: Zap, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '11', name: 'Tailwind CSS', category: 'Frontend', experience: 'Expert', projects: 20, years: 3, icon: Layers, x: 0, y: 0, vx: 0, vy: 0 },
  { id: '12', name: 'React Native', category: 'Mobile', experience: 'Intermediate', projects: 4, years: 1, icon: Smartphone, x: 0, y: 0, vx: 0, vy: 0 },
]

export function InteractiveSkills() {
  const [nodes, setNodes] = useState<SkillNode[]>(skills)
  const [hoveredNode, setHoveredNode] = useState<SkillNode | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  
  useEffect(() => {
    // Initialize positions
    const initializedNodes = skills.map((skill, i) => ({
      ...skill,
      x: Math.random() * 800 - 400,
      y: Math.random() * 600 - 300,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))
    setNodes(initializedNodes)
  }, [])
  
  useEffect(() => {
    let animationId: number
    
    const animate = () => {
      setNodes(prevNodes => {
        return prevNodes.map(node => {
          if (hoveredNode && hoveredNode.id === node.id) {
            return node // Don't move hovered node
          }
          
          let newX = node.x + node.vx
          let newY = node.y + node.vy
          let newVx = node.vx
          let newVy = node.vy
          
          // Boundary collision
          if (newX > 400 || newX < -400) newVx *= -1
          if (newY > 300 || newY < -300) newVy *= -1
          
          // Node collision
          prevNodes.forEach(other => {
            if (other.id !== node.id) {
              const dx = newX - other.x
              const dy = newY - other.y
              const distance = Math.sqrt(dx * dx + dy * dy)
              
              if (distance < 100) {
                newVx += dx * 0.001
                newVy += dy * 0.001
              }
            }
          })
          
          return {
            ...node,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        })
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => cancelAnimationFrame(animationId)
  }, [hoveredNode])
  
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Frontend: 'from-blue-500 to-cyan-500',
      Backend: 'from-purple-500 to-pink-500',
      Database: 'from-green-500 to-emerald-500',
      Languages: 'from-orange-500 to-red-500',
      Cloud: 'from-indigo-500 to-blue-500',
      DevOps: 'from-yellow-500 to-orange-500',
      API: 'from-pink-500 to-rose-500',
      Mobile: 'from-teal-500 to-cyan-500',
    }
    return colors[category] || 'from-gray-500 to-gray-600'
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
          <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
            Technology Ecosystem
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            An interactive visualization of my technical expertise and experience
          </p>
        </motion.div>
        
        {/* Force-Directed Graph */}
        <div ref={canvasRef} className="relative h-[600px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
          {/* Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {nodes.map((node, i) => (
              nodes.slice(i + 1).map((other, j) => {
                const dx = node.x - other.x
                const dy = node.y - other.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                
                if (distance < 200) {
                  const opacity = (200 - distance) / 200 * 0.3
                  return (
                    <line
                      key={`${node.id}-${other.id}`}
                      x1={node.x + 400}
                      y1={node.y + 300}
                      x2={other.x + 400}
                      y2={other.y + 300}
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                      opacity={opacity}
                    />
                  )
                }
                return null
              })
            ))}
          </svg>
          
          {/* Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute cursor-pointer"
              style={{
                left: `${node.x + 400}px`,
                top: `${node.y + 300}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryColor(node.category)} flex items-center justify-center shadow-lg shadow-blue-500/25`}>
                <node.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Tooltip */}
              {hoveredNode?.id === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 z-50"
                >
                  <h4 className="font-display font-bold text-white mb-2">{node.name}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>Category:</span>
                      <span className="text-blue-400">{node.category}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Experience:</span>
                      <span className="text-purple-400">{node.experience}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Projects:</span>
                      <span className="text-cyan-400">{node.projects}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Years:</span>
                      <span className="text-green-400">{node.years}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {Object.keys(
            skills.reduce((acc, skill) => {
              acc[skill.category] = true
              return acc
            }, {} as Record<string, boolean>)
          ).map((category) => (
            <div key={category} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`} />
              <span className="text-gray-400 text-sm">{category}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
