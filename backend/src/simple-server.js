const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Mock data
const services = [
  {
    _id: '1',
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    shortDescription: 'Custom software tailored to your business needs',
    icon: 'CodeBracketIcon',
    features: ['Custom Development', 'Scalable Architecture', 'Modern Technologies'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Development',
    pricing: { type: 'custom', startingPrice: 5000 },
    status: 'active',
    displayOrder: 1
  }
];

const products = [
  {
    _id: '1',
    name: 'School Management System',
    description: 'Comprehensive school management solution',
    category: 'Education',
    features: ['Student Management', 'Grade Tracking', 'Parent Portal'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    pricing: { type: 'subscription', price: 299 },
    status: 'active',
    displayOrder: 1
  }
];

const appointments = [
  {
    _id: '1',
    clientName: 'John Doe',
    email: 'john@example.com',
    phone: '+233 24 123 4567',
    service: 'Custom Software Development',
    preferredDate: '2024-02-15',
    preferredTime: '10:00',
    status: 'pending',
    message: 'Need a custom CRM system'
  }
];

const inquiries = [
  {
    _id: '1',
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Website Development',
    message: 'I need a professional website for my business',
    status: 'new',
    priority: 'medium'
  }
];

const testimonials = [
  {
    _id: '1',
    clientName: 'Sarah Johnson',
    company: 'TechCorp',
    testimonial: 'Excellent service and professional team',
    rating: 5,
    status: 'approved',
    featured: true
  }
];

const teamMembers = [
  {
    _id: '1',
    name: 'Michael Asante',
    position: 'Lead Developer',
    department: 'Development',
    email: 'michael@mitech.com',
    skills: ['JavaScript', 'React', 'Node.js'],
    status: 'active'
  }
];

const blogPosts = [
  {
    _id: '1',
    title: 'The Future of Software Development',
    slug: 'future-of-software-development',
    excerpt: 'Exploring trends in software development',
    content: 'Software development continues to evolve...',
    author: 'John Doe',
    category: 'Technology',
    status: 'published',
    featured: true
  }
];

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Mitech Ghana Backend API Server',
    status: 'Running',
    version: '1.0.0',
    endpoints: {
      services: '/api/services',
      products: '/api/products',
      appointments: '/api/appointments',
      inquiries: '/api/inquiries',
      testimonials: '/api/testimonials',
      team: '/api/team',
      blog: '/api/blog'
    }
  });
});

// Routes
app.get('/api/services', (req, res) => {
  res.json({ success: true, data: services });
});

app.post('/api/services', (req, res) => {
  const newService = { _id: Date.now().toString(), ...req.body };
  services.push(newService);
  res.json({ success: true, data: newService });
});

app.put('/api/services/:id', (req, res) => {
  const index = services.findIndex(s => s._id === req.params.id);
  if (index !== -1) {
    services[index] = { ...services[index], ...req.body };
    res.json({ success: true, data: services[index] });
  } else {
    res.status(404).json({ success: false, error: 'Service not found' });
  }
});

app.delete('/api/services/:id', (req, res) => {
  const index = services.findIndex(s => s._id === req.params.id);
  if (index !== -1) {
    services.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Service not found' });
  }
});

// Products routes
app.get('/api/products', (req, res) => {
  res.json({ success: true, data: products });
});

app.post('/api/products', (req, res) => {
  const newProduct = { _id: Date.now().toString(), ...req.body };
  products.push(newProduct);
  res.json({ success: true, data: newProduct });
});

app.put('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p._id === req.params.id);
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json({ success: true, data: products[index] });
  } else {
    res.status(404).json({ success: false, error: 'Product not found' });
  }
});

app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p._id === req.params.id);
  if (index !== -1) {
    products.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Product not found' });
  }
});

// Appointments routes
app.get('/api/appointments', (req, res) => {
  res.json({ success: true, data: appointments });
});

app.post('/api/appointments', (req, res) => {
  const newAppointment = { _id: Date.now().toString(), ...req.body };
  appointments.push(newAppointment);
  res.json({ success: true, data: newAppointment });
});

app.put('/api/appointments/:id', (req, res) => {
  const index = appointments.findIndex(a => a._id === req.params.id);
  if (index !== -1) {
    appointments[index] = { ...appointments[index], ...req.body };
    res.json({ success: true, data: appointments[index] });
  } else {
    res.status(404).json({ success: false, error: 'Appointment not found' });
  }
});

app.delete('/api/appointments/:id', (req, res) => {
  const index = appointments.findIndex(a => a._id === req.params.id);
  if (index !== -1) {
    appointments.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Appointment not found' });
  }
});

// Inquiries routes
app.get('/api/inquiries', (req, res) => {
  res.json({ success: true, data: inquiries });
});

app.post('/api/inquiries', (req, res) => {
  const newInquiry = { _id: Date.now().toString(), ...req.body };
  inquiries.push(newInquiry);
  res.json({ success: true, data: newInquiry });
});

app.put('/api/inquiries/:id', (req, res) => {
  const index = inquiries.findIndex(i => i._id === req.params.id);
  if (index !== -1) {
    inquiries[index] = { ...inquiries[index], ...req.body };
    res.json({ success: true, data: inquiries[index] });
  } else {
    res.status(404).json({ success: false, error: 'Inquiry not found' });
  }
});

app.delete('/api/inquiries/:id', (req, res) => {
  const index = inquiries.findIndex(i => i._id === req.params.id);
  if (index !== -1) {
    inquiries.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Inquiry not found' });
  }
});

// Testimonials routes
app.get('/api/testimonials', (req, res) => {
  res.json({ success: true, data: testimonials });
});

app.post('/api/testimonials', (req, res) => {
  const newTestimonial = { _id: Date.now().toString(), ...req.body };
  testimonials.push(newTestimonial);
  res.json({ success: true, data: newTestimonial });
});

app.put('/api/testimonials/:id', (req, res) => {
  const index = testimonials.findIndex(t => t._id === req.params.id);
  if (index !== -1) {
    testimonials[index] = { ...testimonials[index], ...req.body };
    res.json({ success: true, data: testimonials[index] });
  } else {
    res.status(404).json({ success: false, error: 'Testimonial not found' });
  }
});

app.delete('/api/testimonials/:id', (req, res) => {
  const index = testimonials.findIndex(t => t._id === req.params.id);
  if (index !== -1) {
    testimonials.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Testimonial not found' });
  }
});

// Team routes
app.get('/api/team', (req, res) => {
  res.json({ success: true, data: teamMembers });
});

app.post('/api/team', (req, res) => {
  const newMember = { _id: Date.now().toString(), ...req.body };
  teamMembers.push(newMember);
  res.json({ success: true, data: newMember });
});

app.put('/api/team/:id', (req, res) => {
  const index = teamMembers.findIndex(m => m._id === req.params.id);
  if (index !== -1) {
    teamMembers[index] = { ...teamMembers[index], ...req.body };
    res.json({ success: true, data: teamMembers[index] });
  } else {
    res.status(404).json({ success: false, error: 'Team member not found' });
  }
});

app.delete('/api/team/:id', (req, res) => {
  const index = teamMembers.findIndex(m => m._id === req.params.id);
  if (index !== -1) {
    teamMembers.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Team member not found' });
  }
});

// Blog routes
app.get('/api/blog', (req, res) => {
  res.json({ success: true, data: blogPosts });
});

app.post('/api/blog', (req, res) => {
  const newPost = { _id: Date.now().toString(), ...req.body };
  blogPosts.push(newPost);
  res.json({ success: true, data: newPost });
});

app.put('/api/blog/:id', (req, res) => {
  const index = blogPosts.findIndex(p => p._id === req.params.id);
  if (index !== -1) {
    blogPosts[index] = { ...blogPosts[index], ...req.body };
    res.json({ success: true, data: blogPosts[index] });
  } else {
    res.status(404).json({ success: false, error: 'Blog post not found' });
  }
});

app.delete('/api/blog/:id', (req, res) => {
  const index = blogPosts.findIndex(p => p._id === req.params.id);
  if (index !== -1) {
    blogPosts.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Blog post not found' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log('📡 API endpoints available:');
  console.log('   - GET/POST/PUT/DELETE /api/services');
  console.log('   - GET/POST/PUT/DELETE /api/products');
  console.log('   - GET/POST/PUT/DELETE /api/appointments');
  console.log('   - GET/POST/PUT/DELETE /api/inquiries');
  console.log('   - GET/POST/PUT/DELETE /api/testimonials');
  console.log('   - GET/POST/PUT/DELETE /api/team');
  console.log('   - GET/POST/PUT/DELETE /api/blog');
});
