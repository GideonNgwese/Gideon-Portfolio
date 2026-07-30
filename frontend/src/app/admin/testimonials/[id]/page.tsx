'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { ImageUpload } from '@/components/ui/image-upload'
import { ArrowLeft, Save, Star, Loader2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { AdminLayout } from '@/components/admin/admin-layout'
import Link from 'next/link'

export default function EditTestimonialPage() {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    avatar_url: '',
    avatar_path: '',
    content: '',
    rating: 5,
    featured: false,
  })

  useEffect(() => {
    fetchTestimonial()
  }, [params.id])

  const fetchTestimonial = async () => {
    try {
      const response = await fetch(`/api/testimonials/${params.id}`)
      if (!response.ok) throw new Error('Failed to fetch testimonial')
      const data = await response.json()
      setFormData({
        name: data.name || '',
        role: data.role || '',
        company: data.company || '',
        avatar_url: data.avatar_url || '',
        avatar_path: data.avatar_path || '',
        content: data.content || '',
        rating: data.rating || 5,
        featured: data.featured || false,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load testimonial',
        variant: 'destructive',
      })
      router.push('/admin')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch(`/api/testimonials/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to update testimonial')

      toast({
        title: 'Success',
        description: 'Testimonial updated successfully',
      })
      router.push('/admin')
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update testimonial',
        variant: 'destructive',
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-8">
          <div className="container mx-auto max-w-2xl">
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8">
            <Link href="/admin">
              <Button variant="ghost" className="gap-2 mb-4">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="font-display text-4xl font-bold mb-2 text-gradient-dark">
              Edit Testimonial
            </h1>
            <p className="text-muted-foreground">
              Update the testimonial
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="glass-dark">
              <CardHeader>
                <CardTitle>Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Client Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-dark">
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUpload
                  onUpload={(url, path) => setFormData({ ...formData, avatar_url: url, avatar_path: path })}
                  onRemove={() => setFormData({ ...formData, avatar_url: '', avatar_path: '' })}
                  currentImage={formData.avatar_url}
                />
              </CardContent>
            </Card>

            <Card className="glass-dark">
              <CardHeader>
                <CardTitle>Testimonial Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="content">Testimonial *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating: {formData.rating} stars</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className={`p-1 ${star <= formData.rating ? 'text-yellow-400' : 'text-muted-foreground'}`}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-dark">
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="featured">Featured Testimonial</Label>
                    <p className="text-sm text-muted-foreground">
                      Show this testimonial prominently on your portfolio
                    </p>
                  </div>
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button type="submit" disabled={saving} className="gap-2">
                <Save className="w-4 h-4" />
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
              <Link href="/admin">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}
