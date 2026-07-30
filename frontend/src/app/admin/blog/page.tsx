'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2, Calendar, Clock } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { AdminLayout } from '@/components/admin/admin-layout'
import Link from 'next/link'

export default function AdminBlog() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()
  const supabase = createClient()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog-posts')
      if (!response.ok) throw new Error('Failed to fetch posts')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load blog posts',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const response = await fetch(`/api/blog-posts/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete post')

      toast({
        title: 'Success',
        description: 'Blog post deleted successfully',
      })
      fetchPosts()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete post',
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
                Blog Posts
              </h1>
              <p className="text-muted-foreground">
                Manage your blog articles
              </p>
            </div>
            <Link href="/admin/blog/new">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                New Post
              </Button>
            </Link>
          </div>

        <div className="grid gap-4">
          {posts.map((post) => (
            <Card key={post.id} className="glass-dark">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl font-semibold">
                        {post.title}
                      </h3>
                      <Badge variant={post.status === 'published' ? 'default' : 'outline'}>
                        {post.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt || post.content.substring(0, 150)}...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      {post.published_at && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.published_at).toLocaleDateString()}</span>
                        </div>
                      )}
                      {post.reading_time && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.reading_time} min read</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/blog/${post.id}`}>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="gap-2"
                      onClick={() => handleDelete(post.id)}
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

        {posts.length === 0 && (
          <Card className="glass-dark">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground mb-4">No blog posts yet</p>
              <Link href="/admin/blog/new">
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Write Your First Post
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
