# Vercel Deployment Instructions

This guide will help you deploy the Portfolio Masterclass platform to Vercel.

## Prerequisites

- A Vercel account (free tier works)
- A Supabase project with database and auth configured
- Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Prepare Your Supabase Project

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for the database to be provisioned

2. **Run Database Migrations**
   - Navigate to your Supabase project dashboard
   - Go to SQL Editor
   - Run the migration files in order:
     - `backend/migrations/001_create_tables.sql`
     - `backend/migrations/002_rls_policies.sql`
   - Optionally run `backend/seed_data.sql` for sample data

3. **Get Your Supabase Credentials**
   - Go to Project Settings → API
   - Copy the following:
     - Project URL
     - anon/public key
     - service_role key (for admin operations)

4. **Set Up Storage Bucket**
   - Go to Storage
   - Create a new bucket named `portfolio-images`
   - Make it public
   - Configure RLS policies for the bucket

## Step 2: Configure Environment Variables

1. **Local Development**
   - Copy `frontend/.env.local.example` to `frontend/.env.local`
   - Fill in your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-project-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
     ```

2. **Vercel Environment Variables**
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add the same three variables with your Supabase credentials

## Step 3: Deploy to Vercel

### Option A: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd frontend
   vercel
   ```

4. **Follow the prompts**
   - Set project name
   - Link to existing Vercel project (if applicable)
   - Confirm environment variables

### Option B: Using Vercel Dashboard

1. **Push Code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Import Project in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Configure settings:
     - Framework Preset: Next.js
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Add Environment Variables**
   - Add your Supabase credentials in the project settings

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete

## Step 4: Configure Supabase Auth

1. **Enable Email Auth**
   - Go to Authentication → Providers
   - Enable Email provider
   - Configure email settings (optional)

2. **Create Admin User**
   - Go to Authentication → Users
   - Click "Add User"
   - Create your admin account
   - Set a strong password

3. **Set User Role**
   - In Supabase SQL Editor, run:
     ```sql
     -- Update user role to admin
     UPDATE auth.users 
     SET raw_user_meta_data = raw_user_meta_data || '{"role": "admin"}'
     WHERE email = 'your-admin-email@example.com';
     ```

## Step 5: Post-Deployment Configuration

1. **Verify Deployment**
   - Visit your Vercel deployment URL
   - Check that the site loads correctly
   - Test the public portfolio pages

2. **Test Admin Access**
   - Navigate to `/admin/login`
   - Log in with your admin credentials
   - Verify dashboard loads
   - Test CRUD operations

3. **Configure Custom Domain (Optional)**
   - Go to Vercel project settings
   - Navigate to Domains
   - Add your custom domain
   - Update DNS records as instructed

4. **Set Up Analytics (Optional)**
   - Enable Vercel Analytics for your project
   - Configure Google Analytics if desired
   - Add tracking codes to your site

## Troubleshooting

### Build Errors

**Issue: Build fails with dependency errors**
- Solution: Run `npm install` locally and ensure all dependencies are installed
- Check that `package.json` is correct

**Issue: Environment variables not found**
- Solution: Verify all environment variables are set in Vercel project settings
- Ensure variable names match exactly (case-sensitive)

### Runtime Errors

**Issue: Supabase connection errors**
- Solution: Verify Supabase URL and keys are correct
- Check that Supabase project is active
- Ensure RLS policies allow public read access

**Issue: Admin redirect loop**
- Solution: Verify middleware configuration
- Check that user has admin role in Supabase
- Ensure cookies are working correctly

### Performance Issues

**Issue: Slow page loads**
- Solution: Enable Vercel Edge Network
- Optimize images and assets
- Check database query performance

**Issue: High memory usage**
- Solution: Review build output size
- Optimize dependencies
- Consider dynamic imports for large components

## Continuous Deployment

Vercel automatically deploys when you push to your Git repository:

1. Make changes locally
2. Commit and push to Git
3. Vercel automatically triggers a new build
4. Preview deployments are created for each branch
5. Merge to main to deploy to production

## Monitoring

- **Vercel Dashboard**: Monitor build logs, analytics, and performance
- **Supabase Dashboard**: Monitor database performance, auth logs, and storage usage
- **Error Tracking**: Consider integrating Sentry or similar for error tracking

## Security Best Practices

1. **Never commit `.env.local` files**
2. **Rotate service role keys regularly**
3. **Enable two-factor authentication on Vercel and Supabase**
4. **Review RLS policies before production**
5. **Keep dependencies updated**
6. **Monitor for suspicious activity in Supabase logs**

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Supabase Documentation: [supabase.com/docs](https://supabase.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

## Next Steps

After successful deployment:

1. Customize the portfolio content through the admin dashboard
2. Upload your resume to Supabase Storage
3. Add your actual projects and blog posts
4. Configure your social media links
5. Test all functionality thoroughly
6. Set up regular backups for your database
