import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, FolderOpen, FileText, MessageSquare, TrendingUp } from 'lucide-react'
import { AdminLayout } from '@/components/admin/admin-layout'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/admin/login')
  }

  // Fetch analytics data
  const [
    { count: projectsCount },
    { count: blogPostsCount },
    { count: messagesCount },
    { count: testimonialsCount },
  ] = await Promise.all([
    supabase.from('projects').select('*', { count: 'exact', head: true }),
    supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
    supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
    supabase.from('testimonials').select('*', { count: 'exact', head: true }),
  ])

  const stats = [
    {
      title: 'Total Projects',
      value: projectsCount || 0,
      icon: FolderOpen,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Blog Posts',
      value: blogPostsCount || 0,
      icon: FileText,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Messages',
      value: messagesCount || 0,
      icon: MessageSquare,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Testimonials',
      value: testimonialsCount || 0,
      icon: Users,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ]

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold mb-2 text-gradient-dark">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="glass-dark">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="glass-dark">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="/admin/projects"
                    className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <FolderOpen className="w-6 h-6 mb-2 text-primary" />
                    <p className="font-medium">Manage Projects</p>
                    <p className="text-sm text-muted-foreground">Add, edit, or delete projects</p>
                  </a>
                  <a
                    href="/admin/blog"
                    className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <FileText className="w-6 h-6 mb-2 text-primary" />
                    <p className="font-medium">Manage Blog</p>
                    <p className="text-sm text-muted-foreground">Write and publish articles</p>
                  </a>
                  <a
                    href="/admin/messages"
                    className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <MessageSquare className="w-6 h-6 mb-2 text-primary" />
                    <p className="font-medium">View Messages</p>
                    <p className="text-sm text-muted-foreground">Check contact form submissions</p>
                  </a>
                  <a
                    href="/admin/testimonials"
                    className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Users className="w-6 h-6 mb-2 text-primary" />
                    <p className="font-medium">Testimonials</p>
                    <p className="text-sm text-muted-foreground">Manage client reviews</p>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-dark">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">System initialized</p>
                      <p className="text-xs text-muted-foreground">Portfolio platform ready</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Database configured</p>
                      <p className="text-xs text-muted-foreground">All tables and RLS policies set up</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Admin access enabled</p>
                      <p className="text-xs text-muted-foreground">Secure authentication configured</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
