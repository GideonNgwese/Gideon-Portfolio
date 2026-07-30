'use client'

import { Monitor, Cpu, HardDrive } from 'lucide-react'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Animated lights */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
      <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-1/3 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
      <div className="absolute top-1/3 left-1/2 w-28 h-28 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Small computer display in background */}
      <div className="absolute bottom-10 right-10 opacity-10 animate-float">
        <div className="relative">
          <Monitor className="w-24 h-24 text-foreground" />
          <div className="absolute top-6 left-6">
            <Cpu className="w-12 h-12 text-foreground" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 left-1/4 opacity-10 animate-float-delayed">
        <HardDrive className="w-16 h-16 text-foreground" />
      </div>
      
      <div className="absolute top-1/2 right-10 opacity-10 animate-float">
        <Cpu className="w-20 h-20 text-foreground" />
      </div>
    </div>
  )
}
