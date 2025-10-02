# Deployment Guide for Mitech Ghana Website

## Quick Deployment Options

### Option 1: Vercel (Recommended for Frontend)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy Frontend**
   ```bash
   cd mitech-website
   vercel
   ```
   - Follow the prompts
   - Set build command: `npm run build`
   - Set output directory: `.next`

3. **Environment Variables in Vercel**
   - Go to Vercel dashboard → Project Settings → Environment Variables
   - Add:
     - `NEXT_PUBLIC_API_URL`: Your backend URL
     - `NEXT_PUBLIC_SITE_URL`: Your frontend URL

### Option 2: Netlify (Alternative for Frontend)

1. **Deploy via Git**
   - Push code to GitHub/GitLab
   - Connect repository to Netlify
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

2. **Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   cd mitech-website
   netlify deploy --prod
   ```

### Option 3: Backend Deployment (Railway/Heroku)

#### Railway (Recommended)
1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Deploy Backend**
   ```bash
   cd backend
   railway login
   railway init
   railway up
   ```

3. **Set Environment Variables**
   ```bash
   railway variables set MONGODB_URI=your_mongodb_connection_string
   railway variables set JWT_SECRET=your_jwt_secret
   railway variables set NODE_ENV=production
   ```

#### Heroku Alternative
1. **Install Heroku CLI**
2. **Deploy Backend**
   ```bash
   cd backend
   heroku create mitech-backend
   heroku config:set MONGODB_URI=your_mongodb_connection_string
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set NODE_ENV=production
   git push heroku main
   ```

### Option 4: Full Stack Deployment (DigitalOcean/AWS)

1. **Server Setup**
   ```bash
   # Install Node.js, MongoDB, PM2
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs mongodb
   npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   git clone your-repository
   cd mitech-ghana
   
   # Backend
   cd backend
   npm install
   npm run build
   pm2 start dist/app.js --name "mitech-backend"
   
   # Frontend
   cd ../mitech-website
   npm install
   npm run build
   pm2 start npm --name "mitech-frontend" -- start
   ```

3. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
       
       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Database Setup

### MongoDB Atlas (Cloud)
1. Create account at mongodb.com/atlas
2. Create cluster
3. Get connection string
4. Update environment variables

### Local MongoDB
```bash
# Ubuntu/Debian
sudo apt-get install mongodb

# macOS
brew install mongodb-community

# Windows
Download from mongodb.com
```

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
NEXT_PUBLIC_SITE_URL=https://your-frontend-url.com
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mitech_website
JWT_SECRET=your_super_secure_jwt_secret_key
JWT_EXPIRES_IN=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@mitech.com
ADMIN_PASSWORD=secure_admin_password
FRONTEND_URL=https://your-frontend-url.com
```

## SSL Certificate (Production)

### Using Certbot (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Monitoring and Maintenance

### PM2 Process Management
```bash
pm2 list                 # List all processes
pm2 restart all         # Restart all processes
pm2 logs                # View logs
pm2 monit              # Monitor processes
```

### Health Checks
- Frontend: Check if site loads at your domain
- Backend: Check API health at `/api/health`
- Database: Verify MongoDB connection

## Troubleshooting

### Common Issues
1. **Build Errors**: Check Node.js version compatibility
2. **Database Connection**: Verify MongoDB URI and network access
3. **CORS Issues**: Update CORS settings in backend
4. **Environment Variables**: Ensure all required variables are set

### Logs
- Vercel: Check function logs in dashboard
- Railway: Use `railway logs`
- PM2: Use `pm2 logs`

## Security Checklist
- [ ] Change default admin credentials
- [ ] Use strong JWT secret
- [ ] Enable HTTPS
- [ ] Set up proper CORS
- [ ] Configure rate limiting
- [ ] Regular security updates
