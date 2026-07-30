'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Youtube, Instagram, Video, TrendingUp, Users, Eye, Heart } from 'lucide-react'
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'

const platforms = [
  {
    name: 'YouTube',
    icon: FaYoutube,
    color: '#FF0000',
    stats: { subscribers: '50K+', views: '2M+', videos: '150+' },
    description: 'Tech tutorials, coding tips, and software engineering content',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    color: '#000000',
    stats: { followers: '100K+', views: '5M+', videos: '300+' },
    description: 'Short-form tech content, coding snippets, and developer tips',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    color: '#E4405F',
    stats: { followers: '30K+', engagement: '8%', posts: '500+' },
    description: 'Behind the scenes, tech lifestyle, and developer journey',
  },
]

export function ContentCreation() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const [animatedStats, setAnimatedStats] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedStats(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <section id="content" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
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
            Content Creation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Inspiring millions through tech education and developer content
          </p>
        </motion.div>
        
        {/* Platforms Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <platform.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Name */}
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {platform.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {platform.description}
                </p>
                
                {/* Stats */}
                <div className="space-y-3">
                  {Object.entries(platform.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-500 capitalize">{key}</span>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={animatedStats ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        className="font-semibold text-white"
                      >
                        {value}
                      </motion.span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >
          <h3 className="font-display text-3xl font-bold text-white text-center mb-8">
            Content Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Total Followers', value: '180K+' },
              { icon: Eye, label: 'Total Views', value: '7M+' },
              { icon: Video, label: 'Total Videos', value: '450+' },
              { icon: Heart, label: 'Engagement Rate', value: '12%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="font-display text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
