'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Code, Brain, Zap } from 'lucide-react'
import Image from 'next/image'

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'AI Engineer',
  'Creative Technologist',
  'Problem Solver',
  'Content Creator',
  'Innovation Builder',
]

export function CinematicHero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [displayText, setDisplayText] = useState('')
  
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let charIndex = 0
    const currentText = roles[currentRole]
    
    const typeText = () => {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1))
        charIndex++
        timeout = setTimeout(typeText, 100)
      } else {
        setIsTyping(false)
        timeout = setTimeout(() => {
          setIsTyping(true)
          setCurrentRole((prev) => (prev + 1) % roles.length)
          charIndex = 0
          setDisplayText('')
        }, 2000)
      }
    }
    
    typeText()
    
    return () => clearTimeout(timeout)
  }, [currentRole])
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Technology Icons */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 opacity-20">
        <Code className="w-16 h-16 text-blue-400" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-40 right-20 opacity-20">
        <Brain className="w-16 h-16 text-purple-400" />
      </motion.div>
      <motion.div style={{ y: y1 }} className="absolute bottom-40 left-1/4 opacity-20">
        <Zap className="w-16 h-16 text-cyan-400" />
      </motion.div>
      
      {/* Holographic Portrait Frame */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Portrait Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative inline-block mb-12"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
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
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-sm"
            />
            
            {/* Glass Frame */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 overflow-hidden">
              <Image
                src="/images/gideon.png"
                alt="Gideon Nguene Ngwese"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-400"
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Name Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-4"
          >
            <p className="text-lg md:text-xl text-blue-400 font-light tracking-widest uppercase">
              Hello, I'm
            </p>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            {'Gideon Nguene Ngwese'.split('').map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                animate={{
                  color: [
                    '#d946ef', // bright purple
                    '#ffffff', // white
                    '#22d3ee', // bright cyan
                    '#d946ef', // bright purple
                  ],
                  textShadow: [
                    '0 0 20px rgba(217, 70, 239, 0.4)',
                    '0 0 30px rgba(255, 255, 255, 0.6)',
                    '0 0 20px rgba(34, 211, 238, 0.4)',
                    '0 0 20px rgba(217, 70, 239, 0.4)',
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.15,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
          
          {/* Typing Animation */}
          <div className="h-8 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              <span className="text-blue-400">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
              />
            </p>
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build software that solves real-world problems while creating content that inspires millions.
          Transforming ideas into exceptional digital experiences.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get in Touch
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white font-semibold overflow-hidden hover:bg-white/20 transition-all"
          >
            <span className="relative flex items-center gap-2">
              View Projects
              <ArrowDown className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: Github, href: 'https://github.com/GideonNgwese', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/gideon-ngwese-976325318', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:ngwesegideono@gmail.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
