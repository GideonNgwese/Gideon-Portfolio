'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Mail, Calendar, Check, Trash2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { AdminLayout } from '@/components/admin/admin-layout'

export default function AdminMessages() {
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/contact-messages')
      if (!response.ok) throw new Error('Failed to fetch messages')
      const data = await response.json()
      setMessages(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load messages',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch('/api/contact-messages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, read: true }),
      })
      if (!response.ok) throw new Error('Failed to update message')

      toast({
        title: 'Success',
        description: 'Message marked as read',
      })
      fetchMessages()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update message',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return

    try {
      const response = await fetch(`/api/contact-messages/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete message')

      toast({
        title: 'Success',
        description: 'Message deleted successfully',
      })
      fetchMessages()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete message',
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
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold mb-2 text-gradient-dark">
              Messages
            </h1>
            <p className="text-muted-foreground">
              Contact form submissions
            </p>
          </div>

        <div className="grid gap-4">
          {messages.map((message) => (
            <Card key={message.id} className={`glass-dark ${!message.read ? 'border-primary/50' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold">
                        {message.name}
                      </h3>
                      {!message.read && (
                        <Badge variant="default">New</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{message.email}</span>
                      {message.subject && <span>• {message.subject}</span>}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(message.created_at).toLocaleString()}</span>
                    </div>
                    <p className="text-muted-foreground bg-muted/30 p-3 rounded-lg">
                      {message.message}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {!message.read && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2"
                        onClick={() => handleMarkAsRead(message.id)}
                      >
                        <Check className="w-4 h-4" />
                        Mark Read
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="destructive"
                      className="gap-2"
                      onClick={() => handleDelete(message.id)}
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

        {messages.length === 0 && (
          <Card className="glass-dark">
            <CardContent className="p-12 text-center">
              <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No messages yet</p>
              <p className="text-sm text-muted-foreground">
                Messages from the contact form will appear here
              </p>
            </CardContent>
          </Card>
        )}
        </div>
      </div>
    </AdminLayout>
  )
}
