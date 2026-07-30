'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2, Star } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { AdminLayout } from '@/components/admin/admin-layout'
import Link from 'next/link'

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials')
      if (!response.ok) throw new Error('Failed to fetch testimonials')
      const data = await response.json()
      setTestimonials(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load testimonials',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return

    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete testimonial')

      toast({
        title: 'Success',
        description: 'Testimonial deleted successfully',
      })
      fetchTestimonials()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete testimonial',
        variant: 'destructive',
      })
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-8">
          <div className="container mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-48" />
              <div className="grid gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-32 bg-muted rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-4xl font-bold mb-2 text-gradient-dark">
                Testimonials
              </h1>
              <p className="text-muted-foreground">
                Manage client testimonials
              </p>
            </div>
            <Link href="/admin/testimonials/new">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Testimonial
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="glass-dark">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-lg font-semibold">
                          {testimonial.name}
                        </h3>
                        {testimonial.featured && (
                          <Badge variant="secondary">Featured</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span>{testimonial.role}</span>
                        {testimonial.company && <span>• {testimonial.company}</span>}
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground line-clamp-2">
                        {testimonial.content}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/admin/testimonials/${testimonial.id}`}>
                        <Button size="sm" variant="outline" className="gap-2">
                          <Edit className="w-4 h-4" />
                          Edit
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="gap-2"
                        onClick={() => handleDelete(testimonial.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {testimonials.length === 0 && (
            <Card className="glass-dark">
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground mb-4">No testimonials yet</p>
                <Link href="/admin/testimonials/new">
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Your First Testimonial
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
