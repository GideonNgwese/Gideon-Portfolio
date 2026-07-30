'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export function Blog() {
  const posts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for building React applications that scale with your team and codebase.',
      date: '2024-01-15',
      readTime: '8 min read',
      slug: 'building-scalable-react-applications',
    },
    {
      title: 'Next.js 15: What\'s New',
      excerpt: 'A comprehensive guide to the latest features in Next.js 15 and how to use them.',
      date: '2024-01-10',
      readTime: '10 min read',
      slug: 'nextjs-15-whats-new',
    },
    {
      title: 'TypeScript Tips for Better Code',
      excerpt: 'Practical TypeScript tips to write cleaner, more maintainable code.',
      date: '2024-01-05',
      readTime: '6 min read',
      slug: 'typescript-tips-better-code',
    },
  ]

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-dark">
            Latest Articles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-dark hover:glass transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="font-display text-xl line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="gap-2 px-0" asChild>
                    <a href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
