# AvirumApps Website Migration to Supabase

This folder contains all the necessary files to migrate your AvirumApps website to Supabase hosting.

## Migration Steps

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign in to your account
2. Create a new project
3. Choose a name for your project (e.g., "avirumapps")
4. Set a strong database password
5. Choose a region closest to your users
6. Wait for your project to be created

### 2. Set Up Storage

1. In your Supabase dashboard, go to "Storage" in the left sidebar
2. Create a new bucket called "website"
3. Set the bucket's privacy to "Public"

### 3. Upload Website Files

1. In the "website" bucket, create a folder structure that matches this repository:
   - `/` (root - for HTML files)
   - `/static/css/`
   - `/static/js/`
   - `/static/images/`

2. Upload all files to their respective folders:
   - HTML files to the root
   - CSS files to `/static/css/`
   - JavaScript files to `/static/js/`
   - Image files to `/static/images/`

### 4. Configure Hosting

1. In your Supabase dashboard, go to "Settings" > "API"
2. Under "API Settings", find "Site URL"
3. Click "Configure" and enable website hosting
4. Set the site URL to your domain (e.g., "avirumapps.com")
5. Set the site path to your bucket (e.g., "/website")

### 5. Set Up Custom Domain (Optional)

1. In your Supabase dashboard, go to "Settings" > "General"
2. Under "Custom Domains", click "Configure"
3. Enter your domain (e.g., "avirumapps.com")
4. Follow the instructions to verify domain ownership and set up DNS records

### 6. Update DNS Settings

1. Log in to your domain registrar
2. Update your DNS settings to point to Supabase:
   - Add a CNAME record for "www" pointing to your Supabase project URL
   - Add an A record for the apex domain (e.g., "avirumapps.com") pointing to Supabase's IP address

## Important Notes

- Make sure all internal links in your HTML files use relative paths
- If you encounter any issues with paths, check that they match the structure in Supabase storage
- For optimal performance, consider enabling Supabase's CDN for your website bucket

## Support

If you need assistance with your migration, contact Supabase support or refer to their documentation at [https://supabase.com/docs](https://supabase.com/docs).
