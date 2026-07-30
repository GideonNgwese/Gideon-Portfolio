export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string
          title: string
          bio: string | null
          avatar_url: string | null
          resume_url: string | null
          github_url: string | null
          linkedin_url: string | null
          twitter_url: string | null
          email: string | null
          location: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          full_name: string
          title: string
          bio?: string | null
          avatar_url?: string | null
          resume_url?: string | null
          github_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          email?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          title?: string
          bio?: string | null
          avatar_url?: string | null
          resume_url?: string | null
          github_url?: string | null
          linkedin_url?: string | null
          twitter_url?: string | null
          email?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          name: string
          category: string
          proficiency: number | null
          icon: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          proficiency?: number | null
          icon?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          proficiency?: number | null
          icon?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      experiences: {
        Row: {
          id: string
          company: string
          position: string
          description: string | null
          start_date: string
          end_date: string | null
          current_job: boolean
          technologies: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company: string
          position: string
          description?: string | null
          start_date: string
          end_date?: string | null
          current_job?: boolean
          technologies?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company?: string
          position?: string
          description?: string | null
          start_date?: string
          end_date?: string | null
          current_job?: boolean
          technologies?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      education: {
        Row: {
          id: string
          institution: string
          degree: string
          field_of_study: string | null
          start_date: string
          end_date: string | null
          gpa: string | null
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          institution: string
          degree: string
          field_of_study?: string | null
          start_date: string
          end_date?: string | null
          gpa?: string | null
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          institution?: string
          degree?: string
          field_of_study?: string | null
          start_date?: string
          end_date?: string | null
          gpa?: string | null
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      certifications: {
        Row: {
          id: string
          name: string
          issuer: string
          issue_date: string
          expiration_date: string | null
          credential_url: string | null
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          issuer: string
          issue_date: string
          expiration_date?: string | null
          credential_url?: string | null
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          issuer?: string
          issue_date?: string
          expiration_date?: string | null
          credential_url?: string | null
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          long_description: string | null
          live_url: string | null
          github_url: string | null
          featured: boolean
          status: 'draft' | 'published'
          technologies: string[] | null
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          description: string
          long_description?: string | null
          live_url?: string | null
          github_url?: string | null
          featured?: boolean
          status?: 'draft' | 'published'
          technologies?: string[] | null
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string
          long_description?: string | null
          live_url?: string | null
          github_url?: string | null
          featured?: boolean
          status?: 'draft' | 'published'
          technologies?: string[] | null
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      project_images: {
        Row: {
          id: string
          project_id: string
          url: string
          alt_text: string | null
          order_index: number
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          url: string
          alt_text?: string | null
          order_index?: number
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          url?: string
          alt_text?: string | null
          order_index?: number
          created_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          cover_image: string | null
          status: 'draft' | 'published'
          tags: string[] | null
          reading_time: number | null
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          cover_image?: string | null
          status?: 'draft' | 'published'
          tags?: string[] | null
          reading_time?: number | null
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          cover_image?: string | null
          status?: 'draft' | 'published'
          tags?: string[] | null
          reading_time?: number | null
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string | null
          company: string | null
          avatar_url: string | null
          content: string
          rating: number | null
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          role?: string | null
          company?: string | null
          avatar_url?: string | null
          content: string
          rating?: number | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string | null
          company?: string | null
          avatar_url?: string | null
          content?: string
          rating?: number | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string | null
          message: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject?: string | null
          message: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string | null
          message?: string
          read?: boolean
          created_at?: string
        }
      }
      site_settings: {
        Row: {
          id: string
          key: string
          value: string | null
          description: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value?: string | null
          description?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: string | null
          description?: string | null
          updated_at?: string
        }
      }
    }
  }
}
