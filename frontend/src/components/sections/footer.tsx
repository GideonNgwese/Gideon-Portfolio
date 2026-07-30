'use client'

import { Mail, Heart } from 'lucide-react'
import { FaTwitter, FaWhatsapp, FaFacebook, FaTiktok, FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold mb-2">Gideon Nguene Ngwese</p>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://x.com/GNgwese1727"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="X (Twitter)"
            >
              <FaTwitter className="w-5 h-5" style={{ color: '#000000' }} />
            </a>
            <a
              href="https://wa.me/+237677848145"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" style={{ color: '#25D366' }} />
            </a>
            <a
              href="https://www.facebook.com/TechSolutions237"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" style={{ color: '#1877F2' }} />
            </a>
            <a
              href="https://www.tiktok.com/@wiseproductions237"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" style={{ color: '#000000' }} />
            </a>
            <a
              href="https://github.com/GideonNgwese"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" style={{ color: '#333333' }} />
            </a>
            <a
              href="mailto:ngwesegideono@gmail.com"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gideon-ngwese-976325318"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" style={{ color: '#0077B5' }} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> by Gideon Nguene Ngwese
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
