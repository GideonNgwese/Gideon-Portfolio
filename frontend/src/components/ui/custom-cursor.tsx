'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 })
  
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 })
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 })
  
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  
  const scale = useTransform(mouseX, [0, 1], [1, isHovering ? 2.5 : 1])
  const opacity = useTransform(mouseX, [0, 1], [1, isHovering ? 0.8 : 1])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      
      // Create particle trail
      if (Math.random() > 0.7) {
        createParticle(e.clientX, e.clientY)
      }
    }
    
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    
    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [mouseX, mouseY])
  
  const createParticle = (x: number, y: number) => {
    const particle = document.createElement('div')
    particle.className = 'cursor-particle'
    particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: rgba(59, 130, 246, 0.6);
      border-radius: 50%;
      pointer-events: none;
      left: ${x}px;
      top: ${y}px;
      z-index: 9999;
      animation: particleFade 0.8s ease-out forwards;
    `
    document.body.appendChild(particle)
    
    setTimeout(() => {
      particle.remove()
    }, 800)
  }
  
  return (
    <>
      <style jsx global>{`
        @keyframes particleFade {
          0% {
            opacity: 1;
            transform: scale(1) translate(0, 0);
          }
          100% {
            opacity: 0;
            transform: scale(0) translate(var(--tx, 0), var(--ty, 0));
          }
        }
        
        * {
          cursor: none !important;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
      
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale,
          opacity,
        }}
      >
        <div
          className={`w-12 h-12 rounded-full border-2 border-blue-500/50 backdrop-blur-sm transition-all duration-300 ${
            isClicking ? 'scale-75 bg-blue-500/20' : 'bg-blue-500/5'
          }`}
          style={{
            boxShadow: isHovering
              ? '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)'
              : '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
          }}
        />
      </motion.div>
      
      <motion.div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[10000] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-blue-400 transition-all duration-150 ${
            isClicking ? 'scale-150 bg-blue-300' : ''
          }`}
          style={{
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)',
          }}
        />
      </motion.div>
    </>
  )
}
