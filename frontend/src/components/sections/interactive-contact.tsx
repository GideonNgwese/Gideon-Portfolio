'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Calendar, Send, Download, Github, Linkedin, Twitter } from 'lucide-react'
import { FaTwitter, FaWhatsapp, FaFacebook, FaTiktok, FaGithub, FaLinkedin } from 'react-icons/fa'
import { PremiumButton } from '@/components/ui/premium-button'

export function InteractiveContact() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const handleSubmit = () => {
    // Handle form submission
    console.log(formData)
  }
  
  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's build something extraordinary together
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {/* Availability */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 font-semibold">Available for new projects</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently accepting freelance work and full-time opportunities
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'ngwesegideono@gmail.com', href: 'mailto:ngwesegideono@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+237 677 848 145', href: 'tel:+237677848145' },
                  { icon: MapPin, label: 'Location', value: 'Cameroon', href: '#' },
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">{item.label}</div>
                      <div className="text-white font-semibold">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Social Links */}
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: FaTwitter, href: 'https://x.com/GNgwese1727', color: '#000000' },
                    { icon: FaWhatsapp, href: 'https://wa.me/+237677848145', color: '#25D366' },
                    { icon: FaFacebook, href: 'https://www.facebook.com/TechSolutions237', color: '#1877F2' },
                    { icon: FaTiktok, href: 'https://www.tiktok.com/@wiseproductions237', color: '#000000' },
                    { icon: FaGithub, href: 'https://github.com/GideonNgwese', color: '#333333' },
                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gideon-ngwese-976325318', color: '#0077B5' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                    >
                      <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Download Resume */}
              <PremiumButton variant="secondary" size="lg" className="w-full">
                <Download className="w-5 h-5" />
                Download Resume
              </PremiumButton>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <PremiumButton variant="primary" size="lg" className="w-full" onClick={handleSubmit}>
                  <Send className="w-5 h-5" />
                  Send Message
                </PremiumButton>
              </div>
            </form>
          </motion.div>
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
