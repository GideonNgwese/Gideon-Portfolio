# Portfolio Masterclass Platform

A masterclass-level premium portfolio platform with a public portfolio website and secure admin dashboard. Built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Supabase.

## Features

### Public Portfolio
- **Cinematic Hero Section**: Animated background with premium typography
- **About Section**: Professional bio and approach
- **Skills**: Categorized skill display with proficiency levels
- **Experience**: Work history with company details and technologies
- **Education**: Academic background and achievements
- **Certifications**: Professional certifications and credentials
- **Projects**: Featured projects with filtering, search, and detail pages
- **Blog**: Articles and blog posts with reading time estimates
- **Testimonials**: Client and colleague testimonials with ratings
- **Contact Form**: Stores messages in Supabase with admin notification
- **Resume Download**: PDF resume hosted on Supabase Storage
- **SEO Optimized**: Metadata, Open Graph, sitemap, robots.txt
- **Performance**: Target Lighthouse 95+ on all metrics
- **Responsive**: Fully responsive and accessible (WCAG AA)

### Admin Dashboard
- **Secure Authentication**: Supabase Auth with protected routes
- **Analytics Dashboard**: Overview cards with key metrics
- **CRUD Management**: Full CRUD for all content types
  - Profile management
  - Projects with images
  - Skills
  - Experiences
  - Education
  - Certifications
  - Blog posts
  - Testimonials
  - Contact messages
  - Site settings
- **Image Upload**: Upload to Supabase Storage with preview and deletion
- **Rich Text Editor**: For blog posts and long-form content
- **Draft/Published Status**: Control content visibility
- **Optimistic UI**: Instant feedback with loading skeletons

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
- **Backend**: Next.js Route Handlers (app/api/*)
- **Database & Auth**: Supabase (PostgreSQL, Auth, Storage)
- **Validation**: Zod
- **Forms**: React Hook Form
- **State**: Zustand for UI state only
- **Styling**: Tailwind CSS with luxury dark theme
- **Deployment**: Vercel for frontend/API, Supabase for database/storage

## Project Structure

```
portfolio-masterclass/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/            # Next.js App Router
│   │   │   ├── admin/      # Admin dashboard
│   │   │   ├── api/        # API routes
│   │   │   ├── blog/       # Blog pages
│   │   │   └── ...
│   │   ├── components/     # React components
│   │   │   ├── sections/   # Page sections
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── lib/            # Utilities
│   │   │   └── supabase/   # Supabase clients
│   │   └── types/          # TypeScript types
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js
├── backend/                 # Database and migrations
│   ├── migrations/         # SQL migration files
│   │   ├── 001_create_tables.sql
│   │   ├── 002_rls_policies.sql
│   │   └── ...
│   └── seed_data.sql       # Sample data
├── README.md
└── VERCEL_DEPLOYMENT.md
```

## Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm
- Supabase account (free tier works)
- Git account (for Vercel deployment)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd portfolio-masterclass
```

### 2. Set Up Supabase

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Enter project name and password
   - Wait for database provisioning (2-3 minutes)

2. **Run Database Migrations**
   - Navigate to your Supabase project
   - Go to SQL Editor in the left sidebar
   - Run `backend/migrations/001_create_tables.sql`
   - Run `backend/migrations/002_rls_policies.sql`
   - Optionally run `backend/seed_data.sql` for sample data

3. **Get Your Credentials**
   - Go to Project Settings → API
   - Copy these values:
     - **Project URL**: `https://xxx.supabase.co`
     - **anon/public key**: `eyJhbGci...`
     - **service_role key**: `eyJhbGci...` (keep this secret!)

4. **Set Up Storage**
   - Go to Storage in the left sidebar
   - Create a new bucket named `portfolio-images`
   - Make it public
   - Add RLS policies for image access

### 3. Configure Environment Variables

1. **Create Environment File**
   ```bash
   cd frontend
   cp .env.local.example .env.local
   ```

2. **Add Your Supabase Credentials**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

### 4. Install Dependencies

```bash
cd frontend
npm install
```

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### 6. Set Up Admin User

1. **Create Supabase User**
   - Go to Authentication → Users in Supabase
   - Click "Add User"
   - Enter email and password
   - Click "Create User"

2. **Set Admin Role**
   - Go to SQL Editor in Supabase
   - Run this query:
     ```sql
     UPDATE auth.users 
     SET raw_user_meta_data = raw_user_meta_data || '{"role": "admin"}'
     WHERE email = 'your-admin-email@example.com';
     ```

3. **Access Admin Dashboard**
   - Navigate to `http://localhost:3000/admin/login`
   - Log in with your admin credentials
   - You should be redirected to the admin dashboard

## Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

### Adding New Components

1. **UI Components** (shadcn/ui):
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```

2. **Page Sections**:
   - Create in `src/components/sections/`
   - Follow existing patterns
   - Use Framer Motion for animations

3. **API Routes**:
   - Create in `src/app/api/[route]/route.ts`
   - Use Next.js Route Handlers
   - Implement proper error handling

### Database Changes

1. **Create Migration**:
   - Add new SQL file in `backend/migrations/`
   - Follow naming convention: `003_description.sql`

2. **Update Types**:
   - Modify `src/types/database.ts`
   - Regenerate with Supabase CLI if needed

3. **Test Locally**:
   - Run in Supabase SQL Editor first
   - Test with sample data
   - Verify RLS policies

## Deployment

### Vercel Deployment

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed deployment instructions.

Quick summary:
1. Push code to Git
2. Import project in Vercel
3. Add environment variables
4. Deploy automatically

### Environment Variables for Production

Add these in Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Customization

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Fonts**: Change in `src/app/layout.tsx`
- **Theme**: Adjust Tailwind config in `tailwind.config.ts`

### Content

- **Profile**: Update via admin dashboard
- **Projects**: Add through admin dashboard
- **Blog**: Write and publish via admin
- **Settings**: Configure site-wide settings

### Features

- **Add Sections**: Create new section components
- **Modify Layout**: Edit `src/app/layout.tsx`
- **Add Pages**: Create new routes in `src/app/`

## Troubleshooting

### Common Issues

**Issue: Supabase connection error**
- Verify environment variables are set
- Check Supabase project is active
- Ensure RLS policies allow access

**Issue: Admin redirect loop**
- Verify user has admin role in Supabase
- Check middleware configuration
- Clear browser cookies

**Issue: Build fails**
- Run `npm install` locally
- Check Node.js version (18+)
- Verify all dependencies are installed

**Issue: Images not loading**
- Check Supabase Storage bucket is public
- Verify RLS policies for storage
- Ensure image URLs are correct

### Getting Help

- Check Supabase logs in dashboard
- Review Vercel deployment logs
- Enable debug mode in development
- Check browser console for errors

## Performance Optimization

The platform is optimized for Lighthouse 95+ scores:

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Route-based and component-based
- **Caching**: Supabase query caching
- **Minification**: Automatic in production
- **Tree Shaking**: Automatic with Next.js

## Security

- **Row Level Security**: Enabled on all tables
- **Authentication**: Supabase Auth with secure sessions
- **API Protection**: Service role key only on server
- **XSS Protection**: React's built-in sanitization
- **CSRF Protection**: Next.js built-in protection
- **Environment Variables**: Never committed to Git

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Database by [Supabase](https://supabase.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## Support

For issues and questions:
- Open a GitHub issue
- Check Supabase documentation
- Review Next.js documentation
- Contact the maintainer

---

**Built with ❤️ for developers who want a premium portfolio platform**
