'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Target, Rocket, Heart, Lightbulb, Award, Users } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  { icon: Rocket, label: 'Projects Built', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '30+' },
  { icon: Award, label: 'Awards Won', value: '5' },
  { icon: Target, label: 'Years Experience', value: '4+' },
]

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries with cutting-edge technology' },
  { icon: Heart, title: 'Passion', description: 'Building products I truly believe in' },
  { icon: Target, title: 'Excellence', description: 'Delivering world-class quality in everything' },
]

export function ImmersiveAbout() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  
  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A passionate software engineer building the future, one line of code at a time
          </p>
        </motion.div>
        
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Glass Card */}
              <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-gradient-xy" />
                
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    My Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I'm Gideon Nguene Ngwese, a software engineer who transforms complex problems into elegant solutions. My journey began with a curiosity about how things work, which evolved into a passion for creating technology that matters.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Today, I specialize in full-stack development, AI engineering, and creative technology. I believe in building software that not only works flawlessly but also creates meaningful impact on people's lives.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Portrait */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Holographic Border */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-sm"
                />
                
                {/* Glass Frame */}
                <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl border border-white/20 overflow-hidden">
                  <Image
                    src="/images/about.png"
                    alt="Gideon Nguene Ngwese"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
              >
                <achievement.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display text-3xl font-bold text-white mb-1">
                  {achievement.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-display text-3xl font-bold text-white text-center mb-12">
            My Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 group hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
