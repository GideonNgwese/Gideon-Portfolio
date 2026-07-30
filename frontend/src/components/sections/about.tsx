'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-dark">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-dark h-full">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with 5+ years of experience building web applications. 
                  I specialize in React, Next.js, and Node.js, with a focus on creating beautiful, performant, 
                  and user-friendly applications. I love solving complex problems and turning ideas into reality.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-dark h-full">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  What I Do
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I build full-stack web applications from concept to deployment. Whether it's a startup MVP, 
                  an enterprise platform, or a personal project, I bring expertise in modern web technologies, 
                  best practices, and a keen eye for detail to every project I work on.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Card className="glass-dark">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-2xl font-semibold mb-4">
                My Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and following best practices. 
                I stay up-to-date with the latest technologies and continuously improve my skills. 
                Collaboration and communication are key to my work style, ensuring projects are delivered 
                on time and exceed expectations.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
