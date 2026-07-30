-- Seed data for the portfolio platform

-- Insert profile
INSERT INTO profiles (id, full_name, title, bio, email, location, github_url, linkedin_url, twitter_url) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Alex Developer',
  'Senior Full-Stack Developer',
  'Passionate about building beautiful, performant web applications with modern technologies. Specializing in React, Next.js, and Node.js with 5+ years of experience delivering high-quality software solutions.',
  'alex@example.com',
  'San Francisco, CA',
  'https://github.com/alexdeveloper',
  'https://linkedin.com/in/alexdeveloper',
  'https://twitter.com/alexdeveloper'
) ON CONFLICT DO NOTHING;

-- Insert skills
INSERT INTO skills (name, category, proficiency, icon) VALUES
  ('TypeScript', 'Languages', 5, 'code'),
  ('JavaScript', 'Languages', 5, 'code'),
  ('React', 'Frontend', 5, 'layout'),
  ('Next.js', 'Frontend', 5, 'layout'),
  ('Node.js', 'Backend', 4, 'server'),
  ('PostgreSQL', 'Database', 4, 'database'),
  ('Tailwind CSS', 'Styling', 5, 'palette'),
  ('Git', 'Tools', 5, 'git-branch'),
  ('Docker', 'DevOps', 3, 'container'),
  ('AWS', 'Cloud', 3, 'cloud')
ON CONFLICT (name) DO NOTHING;

-- Insert experiences
INSERT INTO experiences (company, position, description, start_date, end_date, current_job, technologies) VALUES
  ('Tech Corp', 'Senior Full-Stack Developer', 'Led development of enterprise applications serving 1M+ users. Implemented microservices architecture and improved system performance by 40%.', '2022-03-01', NULL, true, ARRAY['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS']),
  ('StartupXYZ', 'Full-Stack Developer', 'Built and maintained multiple customer-facing features. Collaborated with design team to improve UX and increase conversion rates by 25%.', '2020-06-01', '2022-02-28', false, ARRAY['JavaScript', 'React', 'Express', 'MongoDB']),
  ('WebAgency', 'Junior Developer', 'Developed responsive websites for clients across various industries. Gained experience in agile development and CI/CD pipelines.', '2019-01-01', '2020-05-31', false, ARRAY['HTML', 'CSS', 'JavaScript', 'PHP'])
ON CONFLICT DO NOTHING;

-- Insert education
INSERT INTO education (institution, degree, field_of_study, start_date, end_date, gpa, description) VALUES
  ('University of California, Berkeley', 'Bachelor of Science', 'Computer Science', '2015-09-01', '2019-05-31', '3.8', 'Graduated with honors. Focused on software engineering and distributed systems.'),
  ('Stanford University', 'Master of Science', 'Computer Science', '2019-09-01', '2020-12-31', '3.9', 'Specialized in machine learning and web technologies.')
ON CONFLICT DO NOTHING;

-- Insert certifications
INSERT INTO certifications (name, issuer, issue_date, expiration_date, credential_url, description) VALUES
  ('AWS Certified Solutions Architect', 'Amazon Web Services', '2021-06-15', '2024-06-15', 'https://aws.amazon.com/certification/', 'Validated expertise in designing distributed systems on AWS.'),
  ('Google Cloud Professional Developer', 'Google Cloud', '2022-03-20', '2025-03-20', 'https://cloud.google.com/certification', 'Demonstrated proficiency in developing applications on Google Cloud Platform.'),
  ('Meta Front-End Developer Professional Certificate', 'Meta', '2023-01-10', NULL, 'https://www.coursera.org/professional-certificates/meta-front-end-developer', 'Comprehensive front-end development certification covering React, UI/UX, and more.')
ON CONFLICT DO NOTHING;

-- Insert projects
INSERT INTO projects (title, description, long_description, live_url, github_url, featured, status, technologies) VALUES
  ('E-Commerce Platform', 'A modern e-commerce platform with real-time inventory management', 'Built a full-featured e-commerce platform with shopping cart, payment processing, and admin dashboard. Implemented real-time inventory updates using WebSockets and optimized for high traffic loads.', 'https://demo-ecommerce.example.com', 'https://github.com/alexdeveloper/ecommerce-platform', true, 'published', ARRAY['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis']),
  ('Task Management App', 'Collaborative task management with real-time updates', 'Developed a Trello-like task management application with drag-and-drop functionality, real-time collaboration, and team workspaces. Used WebRTC for real-time updates.', 'https://tasks.example.com', 'https://github.com/alexdeveloper/task-app', true, 'published', ARRAY['React', 'Firebase', 'Tailwind CSS', 'Framer Motion']),
  ('Weather Dashboard', 'Beautiful weather app with location-based forecasts', 'Created a weather dashboard that provides accurate forecasts based on user location. Features include hourly/daily forecasts, weather maps, and severe weather alerts.', 'https://weather.example.com', 'https://github.com/alexdeveloper/weather-dashboard', false, 'published', ARRAY['Next.js', 'OpenWeather API', 'Chart.js', 'Tailwind CSS']),
  ('Portfolio Generator', 'AI-powered portfolio website generator', 'Built an AI-powered tool that generates professional portfolio websites based on user input. Uses GPT-4 for content generation and automated deployment.', 'https://portfolio-gen.example.com', 'https://github.com/alexdeveloper/portfolio-generator', true, 'published', ARRAY['Next.js', 'OpenAI API', 'Vercel', 'Supabase'])
ON CONFLICT DO NOTHING;

-- Insert blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, status, tags, reading_time, published_at) VALUES
  ('Building Scalable React Applications', 'building-scalable-react-applications', 'Learn best practices for building React applications that scale with your team and codebase.', 'Building scalable React applications requires careful planning and architecture. In this post, we explore key patterns and practices that help maintain code quality as your application grows...', 'published', ARRAY['React', 'Architecture', 'Best Practices'], 8, NOW()),
  ('Next.js 15: What''s New', 'nextjs-15-whats-new', 'A comprehensive guide to the latest features in Next.js 15 and how to use them.', 'Next.js 15 brings exciting new features including improved performance, better developer experience, and new APIs. Let''s dive into what''s changed and how you can leverage these improvements...', 'published', ARRAY['Next.js', 'React', 'Web Development'], 10, NOW()),
  ('TypeScript Tips for Better Code', 'typescript-tips-better-code', 'Practical TypeScript tips to write cleaner, more maintainable code.', 'TypeScript can significantly improve your development experience when used correctly. Here are some practical tips to get the most out of TypeScript in your projects...', 'published', ARRAY['TypeScript', 'JavaScript', 'Best Practices'], 6, NOW()),
  ('The Future of Web Development', 'future-of-web-development', 'Exploring emerging trends and technologies shaping the future of web development.', 'The web development landscape is constantly evolving. From AI integration to new frameworks, let''s explore what the future holds for web developers...', 'draft', ARRAY['Web Development', 'Technology', 'Trends'], 12, NULL)
ON CONFLICT (slug) DO NOTHING;

-- Insert testimonials
INSERT INTO testimonials (name, role, company, avatar_url, content, rating, featured) VALUES
  ('Sarah Johnson', 'CTO', 'TechStartup Inc', 'https://i.pravatar.cc/150?img=1', 'Alex is an exceptional developer who delivered our project ahead of schedule. The code quality was outstanding and the application performs flawlessly.', 5, true),
  ('Michael Chen', 'Product Manager', 'Digital Agency', 'https://i.pravatar.cc/150?img=3', 'Working with Alex was a great experience. He understood our requirements perfectly and provided valuable technical insights that improved our product.', 5, true),
  ('Emily Rodriguez', 'Founder', 'EcoTech Solutions', 'https://i.pravatar.cc/150?img=5', 'Alex built our entire platform from scratch. His attention to detail and commitment to quality made all the difference. Highly recommended!', 5, false)
ON CONFLICT DO NOTHING;

-- Insert site settings
INSERT INTO site_settings (key, value, description) VALUES
  ('admin_email', 'ngwesegideon0@gmail.com', 'The admin of the system'),
  ('site_name', 'Alex Developer', 'The name of the portfolio site'),
  ('site_description', 'Senior Full-Stack Developer specializing in React, Next.js, and Node.js', 'Site meta description'),
  ('contact_email', 'alex@example.com', 'Contact email for the site'),
  ('social_github', 'https://github.com/alexdeveloper', 'GitHub profile URL'),
  ('social_linkedin', 'https://linkedin.com/in/alexdeveloper', 'LinkedIn profile URL'),
  ('social_twitter', 'https://twitter.com/alexdeveloper', 'Twitter profile URL')
ON CONFLICT (key) DO NOTHING;
