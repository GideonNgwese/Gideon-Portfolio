'use client'

import { useEffect, useRef } from 'react'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)
  
  useEffect(() => {
    // Simple smooth scroll implementation without external dependency
    let isScrolling = false
    
    const handleWheel = (e: WheelEvent) => {
      if (!isScrolling) {
        isScrolling = true
        window.scrollBy({
          top: e.deltaY,
          behavior: 'smooth'
        })
        setTimeout(() => {
          isScrolling = false
        }, 50)
      }
    }
    
    window.addEventListener('wheel', handleWheel, { passive: true })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])
  
  return <>{children}</>
}
