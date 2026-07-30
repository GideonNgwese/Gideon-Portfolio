import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gideon Nguene Ngwese | Senior Full-Stack Developer',
  description: 'Senior Full-Stack Developer specializing in React, Next.js, and Node.js. Building beautiful, performant web applications.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Gideon Nguene Ngwese' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexdeveloper.com',
    title: 'Gideon Nguene Ngwese | Senior Full-Stack Developer',
    description: 'Senior Full-Stack Developer specializing in React, Next.js, and Node.js.',
    siteName: 'Gideon Nguene Ngwese',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gideon Nguene Ngwese | Senior Full-Stack Developer',
    description: 'Senior Full-Stack Developer specializing in React, Next.js, and Node.js.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
