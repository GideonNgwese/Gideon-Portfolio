'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credential: 'AWS-CERTIFIED-SA-PRO',
    url: 'https://aws.amazon.com/certification/',
  },
  {
    id: 2,
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: '2023',
    credential: 'GCP-PROFESSIONAL',
    url: 'https://cloud.google.com/certification',
  },
  {
    id: 3,
    title: 'Meta Frontend Developer',
    issuer: 'Meta',
    date: '2022',
    credential: 'META-FRONTEND',
    url: 'https://www.facebookblueprint.com/certificate',
  },
  {
    id: 4,
    title: 'MongoDB Developer',
    issuer: 'MongoDB',
    date: '2022',
    credential: 'MONGODB-DEV',
    url: 'https://www.mongodb.com/university',
  },
  {
    id: 5,
    title: 'TensorFlow Developer',
    issuer: 'Google',
    date: '2022',
    credential: 'TF-DEV',
    url: 'https://www.tensorflow.org/certificate',
  },
  {
    id: 6,
    title: 'React Advanced',
    issuer: 'Meta',
    date: '2021',
    credential: 'REACT-ADVANCED',
    url: 'https://www.facebookblueprint.com/certificate',
  },
]

export function CertificatesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section id="certificates" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
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
            Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional certifications validating expertise across multiple technologies
          </p>
        </motion.div>
        
        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => {
              const position = (index - currentIndex + certificates.length) % certificates.length
              const isVisible = position === 0 || position === 1 || position === certificates.length - 1
              
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: position === 0 ? 1 : 0.9,
                    x: position === 0 ? 0 : position === 1 ? 20 : -20,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`relative ${isVisible ? 'block' : 'hidden'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 group"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    
                    {/* Issuer */}
                    <p className="text-gray-400 mb-4">
                      {cert.issuer}
                    </p>
                    
                    {/* Date */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-gray-500 text-sm">{cert.date}</span>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm"
                      >
                        Verify
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    {/* Credential */}
                    <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono">
                      {cert.credential}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              />
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
