'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      company: 'Tech Corp',
      position: 'Senior Full-Stack Developer',
      description: 'Led development of enterprise applications serving 1M+ users. Implemented microservices architecture and improved system performance by 40%.',
      period: 'Mar 2022 - Present',
      location: 'San Francisco, CA',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      company: 'StartupXYZ',
      position: 'Full-Stack Developer',
      description: 'Built and maintained multiple customer-facing features. Collaborated with design team to improve UX and increase conversion rates by 25%.',
      period: 'Jun 2020 - Feb 2022',
      location: 'Remote',
      technologies: ['JavaScript', 'React', 'Express', 'MongoDB'],
    },
    {
      company: 'WebAgency',
      position: 'Junior Developer',
      description: 'Developed responsive websites for clients across various industries. Gained experience in agile development and CI/CD pipelines.',
      period: 'Jan 2019 - May 2020',
      location: 'New York, NY',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-dark">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-dark hover:glass transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
