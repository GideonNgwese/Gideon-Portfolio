-- RLS Policies for all tables

-- Profiles table policies
-- Public: read-only access to profile data
CREATE POLICY "Profiles are viewable by everyone" 
ON profiles FOR SELECT USING (true);

-- Authenticated admin: full CRUD access
CREATE POLICY "Admins can insert profiles" 
ON profiles FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update profiles" 
ON profiles FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete profiles" 
ON profiles FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Skills table policies
-- Public: read-only access
CREATE POLICY "Skills are viewable by everyone" 
ON skills FOR SELECT USING (true);

-- Authenticated admin: full CRUD access
CREATE POLICY "Admins can insert skills" 
ON skills FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update skills" 
ON skills FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete skills" 
ON skills FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Experiences table policies
-- Public: read-only access
CREATE POLICY "Experiences are viewable by everyone" 
ON experiences FOR SELECT USING (true);

-- Authenticated admin: full CRUD access
CREATE POLICY "Admins can insert experiences" 
ON experiences FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update experiences" 
ON experiences FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete experiences" 
ON experiences FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Education table policies
-- Public: read-only access
CREATE POLICY "Education is viewable by everyone" 
ON education FOR SELECT USING (true);

-- Authenticated admin: full CRUD access
CREATE POLICY "Admins can insert education" 
ON education FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update education" 
ON education FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete education" 
ON education FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Certifications table policies
-- Public: read-only access
CREATE POLICY "Certifications are viewable by everyone" 
ON certifications FOR SELECT USING (true);

-- Authenticated admin: full CRUD access
CREATE POLICY "Admins can insert certifications" 
ON certifications FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update certifications" 
ON certifications FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete certifications" 
ON certifications FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Projects table policies
-- Public: read-only access to published projects
CREATE POLICY "Published projects are viewable by everyone" 
ON projects FOR SELECT 
USING (status = 'published');

-- Authenticated admin: full CRUD access to all projects
CREATE POLICY "Admins can insert projects" 
ON projects FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update projects" 
ON projects FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete projects" 
ON projects FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Project images table policies
-- Public: read-only access to images of published projects
CREATE POLICY "Project images for published projects are viewable by everyone" 
ON project_images FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM projects 
    WHERE projects.id = project_images.project_id 
    AND projects.status = 'published'
  )
);

-- Authenticated admin: full CRUD access
CREATE POLICY "Admins can insert project images" 
ON project_images FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update project images" 
ON project_images FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete project images" 
ON project_images FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Blog posts table policies
-- Public: read-only access to published posts
CREATE POLICY "Published blog posts are viewable by everyone" 
ON blog_posts FOR SELECT 
USING (status = 'published');

-- Authenticated admin: full CRUD access to all posts
CREATE POLICY "Admins can insert blog posts" 
ON blog_posts FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update blog posts" 
ON blog_posts FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete blog posts" 
ON blog_posts FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Testimonials table policies
-- Public: read-only access
CREATE POLICY "Testimonials are viewable by everyone" 
ON testimonials FOR SELECT USING (true);

-- Authenticated admin: full CRUD access
CREATE POLICY "Admins can insert testimonials" 
ON testimonials FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update testimonials" 
ON testimonials FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete testimonials" 
ON testimonials FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Contact messages table policies
-- Public: insert only (contact form)
CREATE POLICY "Anyone can submit contact messages" 
ON contact_messages FOR INSERT 
WITH CHECK (true);

-- Authenticated admin: read and update access
CREATE POLICY "Admins can view contact messages" 
ON contact_messages FOR SELECT 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update contact messages" 
ON contact_messages FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete contact messages" 
ON contact_messages FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');

-- Site settings table policies
-- Public: read-only access
CREATE POLICY "Site settings are viewable by everyone" 
ON site_settings FOR SELECT USING (true);

-- Authenticated admin: full CRUD access
CREATE POLICY "Admins can insert site settings" 
ON site_settings FOR INSERT 
TO authenticated 
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update site settings" 
ON site_settings FOR UPDATE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin')
WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can delete site settings" 
ON site_settings FOR DELETE 
TO authenticated 
USING (auth.jwt() ->> 'role' = 'admin');
