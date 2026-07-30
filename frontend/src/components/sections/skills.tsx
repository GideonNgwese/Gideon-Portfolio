'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  const skills = [
    { name: 'TypeScript', level: 5, category: 'Languages' },
    { name: 'JavaScript', level: 5, category: 'Languages' },
    { name: 'React', level: 5, category: 'Frontend' },
    { name: 'Next.js', level: 5, category: 'Frontend' },
    { name: 'Node.js', level: 4, category: 'Backend' },
    { name: 'PostgreSQL', level: 4, category: 'Database' },
    { name: 'Tailwind CSS', level: 5, category: 'Styling' },
    { name: 'Git', level: 5, category: 'Tools' },
    { name: 'Docker', level: 3, category: 'DevOps' },
    { name: 'AWS', level: 3, category: 'Cloud' },
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-dark">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-display text-2xl font-semibold mb-6">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="glass-dark hover:glass transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-3">
                            <span className="font-medium">{skill.name}</span>
                            <Badge variant="secondary">{skill.level}/5</Badge>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-2 flex-1 rounded-full ${
                                  i < skill.level
                                    ? 'bg-primary'
                                    : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
