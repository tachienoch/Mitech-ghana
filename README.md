# Mitech Ghana - Professional Software Company Website

A modern, professional website with admin dashboard for Mitech Ghana, a software development company specializing in custom software development, web solutions, digital marketing, and ready-made management systems.

## 🚀 Features

### Frontend (Client Website)
- **Modern Homepage** with hero section, services showcase, and call-to-actions
- **Responsive Design** optimized for all devices
- **Services Section** highlighting software development, web development, digital marketing
- **Products Portfolio** showcasing ready-made systems (POS, HMS, SMS, School Management)
- **Testimonials** with interactive carousel
- **Contact Form** with WhatsApp integration
- **SEO Optimized** with proper meta tags and structured data
- **Performance Optimized** with Next.js and modern web practices

### Backend API
- **RESTful API** built with Node.js and Express
- **MongoDB Database** with Mongoose ODM
- **JWT Authentication** for secure admin access
- **Role-based Access Control** (Admin/Manager roles)
- **Input Validation** with express-validator
- **Rate Limiting** and security middleware
- **File Upload Support** for images and documents

### Admin Dashboard
- **Secure Login System** with JWT authentication
- **Dashboard Analytics** with key metrics and charts
- **Content Management** for services, products, and blog posts
- **Appointment Management** with status tracking
- **Inquiry Management** with lead tracking
- **Testimonial Management** with approval workflow
- **Team Member Management** with profile editing
- **User Management** with role assignment

## 🛠 Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Heroicons** - Beautiful SVG icons
- **React Hook Form** - Form handling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Nodemailer** - Email sending

## 📁 Project Structure

```
mitech-ghana/
├── backend/                 # Backend API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   └── app.ts          # Main application file
│   ├── package.json
│   └── tsconfig.json
├── mitech-website/         # Frontend application
│   ├── src/
│   │   ├── app/            # Next.js app directory
│   │   │   ├── admin/      # Admin dashboard pages
│   │   │   ├── globals.css # Global styles
│   │   │   ├── layout.tsx  # Root layout
│   │   │   └── page.tsx    # Homepage
│   │   └── components/     # Reusable components
│   ├── public/             # Static assets
│   ├── package.json
│   └── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mitech-ghana
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Copy environment variables
   cp .env.example .env
   
   # Edit .env with your configuration
   # - MongoDB connection string
   # - JWT secret key
   # - Email configuration
   ```

3. **Setup Frontend**
   ```bash
   cd ../mitech-website
   npm install
   ```

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/mitech_website

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Admin Configuration
ADMIN_EMAIL=admin@mitech.com
ADMIN_PASSWORD=admin123

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on http://localhost:5000

2. **Start the Frontend Application**
   ```bash
   cd mitech-website
   npm run dev
   ```
   Frontend will run on http://localhost:3000

3. **Access the Application**
   - **Main Website**: http://localhost:3000
   - **Admin Dashboard**: http://localhost:3000/admin
   - **API Documentation**: http://localhost:5000/api/health

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register new admin
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service (Admin)
- `PUT /api/services/:id` - Update service (Admin)
- `DELETE /api/services/:id` - Delete service (Admin)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Appointments
- `GET /api/appointments` - Get all appointments (Admin)
- `GET /api/appointments/:id` - Get appointment by ID (Admin)
- `POST /api/appointments` - Book new appointment (Public)
- `PUT /api/appointments/:id` - Update appointment (Admin)
- `DELETE /api/appointments/:id` - Delete appointment (Admin)

### Inquiries
- `GET /api/inquiries` - Get all inquiries (Admin)
- `GET /api/inquiries/:id` - Get inquiry by ID (Admin)
- `POST /api/inquiries` - Submit new inquiry (Public)
- `PUT /api/inquiries/:id` - Update inquiry (Admin)
- `DELETE /api/inquiries/:id` - Delete inquiry (Admin)

### Dashboard Features
- **Analytics Overview** - Key metrics and statistics
- **Service Management** - Add, edit, delete services
- **Product Management** - Manage product catalog
- **Appointment Management** - View and manage bookings
- **Inquiry Management** - Handle customer inquiries
- **Content Management** - Blog posts and testimonials
- **User Management** - Admin user accounts

## 🚀 Deployment

### Production Build

1. **Build Backend**
   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build Frontend**
   ```bash
   cd mitech-website
   npm run build
   npm start
   ```

### Deployment Options

#### Option 1: Vercel (Frontend) + Railway/Heroku (Backend)
1. Deploy frontend to Vercel
2. Deploy backend to Railway or Heroku
3. Update CORS settings and environment variables

#### Option 2: DigitalOcean Droplet
1. Set up Ubuntu server
2. Install Node.js, MongoDB, and PM2
3. Clone repository and install dependencies
4. Use PM2 for process management
5. Set up Nginx as reverse proxy

#### Option 3: Docker Deployment
```dockerfile
# Dockerfile example for backend
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 🔧 Configuration

### MongoDB Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Create database named `mitech_website`
3. Update connection string in `.env`

### Email Configuration
1. Use Gmail SMTP or other email service
2. Generate app password for Gmail
3. Update email settings in `.env`

### Security Considerations
- Change default JWT secret
- Use strong admin passwords
- Enable HTTPS in production
- Set up proper CORS policies
- Implement rate limiting
- Regular security updates

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎨 Customization

### Branding
- Update logo in `/public` directory
- Modify colors in `tailwind.config.js`
- Update company information in components

### Content Management
- Services and products can be managed via admin dashboard
- Blog posts support rich text editing
- Testimonials can be approved/rejected

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check MongoDB is running
   - Verify connection string
   - Check network connectivity

2. **JWT Authentication Issues**
   - Verify JWT secret is set
   - Check token expiration
   - Clear browser localStorage

3. **Email Not Sending**
   - Verify SMTP settings
   - Check email credentials
   - Test with different email provider

## 📞 Support

For technical support or questions:
- **Email**: support@mitechghana.com
- **Phone**: +233 XX XXX XXXX
- **Website**: https://mitechghana.com

## 📄 License

This project is proprietary software developed for Mitech Ghana. All rights reserved.

---

**Developed by Mitech Ghana Development Team**  
© 2025 Mitech Ghana. All rights reserved.
