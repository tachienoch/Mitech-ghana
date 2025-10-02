const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    // Get token from localStorage if available
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('adminToken');
    }
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminToken', token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || `HTTP error! status: ${response.status}`,
        };
      }

      return {
        success: true,
        data: data.data || data,
        message: data.message,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // Auth methods
  async login(email: string, password: string) {
    return this.request<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async getProfile() {
    return this.request<any>('/auth/profile');
  }

  // Services methods
  async getServices() {
    return this.request<any[]>('/services');
  }

  async getService(id: string) {
    return this.request<any>(`/services/${id}`);
  }

  async createService(serviceData: any) {
    return this.request<any>('/services', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    });
  }

  async updateService(id: string, serviceData: any) {
    return this.request<any>(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    });
  }

  async deleteService(id: string) {
    return this.request<any>(`/services/${id}`, {
      method: 'DELETE',
    });
  }

  // Products methods
  async getProducts() {
    return this.request<any[]>('/products');
  }

  async getProduct(id: string) {
    return this.request<any>(`/products/${id}`);
  }

  async createProduct(productData: any) {
    return this.request<any>('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(id: string, productData: any) {
    return this.request<any>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
  }

  async deleteProduct(id: string) {
    return this.request<any>(`/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Appointments methods
  async getAppointments() {
    return this.request<any[]>('/appointments');
  }

  async getAppointment(id: string) {
    return this.request<any>(`/appointments/${id}`);
  }

  async createAppointment(appointmentData: any) {
    return this.request<any>('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  }

  async updateAppointment(id: string, appointmentData: any) {
    return this.request<any>(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(appointmentData),
    });
  }

  async deleteAppointment(id: string) {
    return this.request<any>(`/appointments/${id}`, {
      method: 'DELETE',
    });
  }

  // Inquiries methods
  async getInquiries() {
    return this.request<any[]>('/inquiries');
  }

  async getInquiry(id: string) {
    return this.request<any>(`/inquiries/${id}`);
  }

  async updateInquiry(id: string, inquiryData: any) {
    return this.request<any>(`/inquiries/${id}`, {
      method: 'PUT',
      body: JSON.stringify(inquiryData),
    });
  }

  async deleteInquiry(id: string) {
    return this.request<any>(`/inquiries/${id}`, {
      method: 'DELETE',
    });
  }

  // Testimonials methods
  async getTestimonials() {
    return this.request<any[]>('/testimonials');
  }

  async getTestimonial(id: string) {
    return this.request<any>(`/testimonials/${id}`);
  }

  async createTestimonial(testimonialData: any) {
    return this.request<any>('/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimonialData),
    });
  }

  async updateTestimonial(id: string, testimonialData: any) {
    return this.request<any>(`/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(testimonialData),
    });
  }

  async deleteTestimonial(id: string) {
    return this.request<any>(`/testimonials/${id}`, {
      method: 'DELETE',
    });
  }

  // Team methods
  async getTeamMembers() {
    return this.request<any[]>('/team');
  }

  async getTeamMember(id: string) {
    return this.request<any>(`/team/${id}`);
  }

  async createTeamMember(teamData: any) {
    return this.request<any>('/team', {
      method: 'POST',
      body: JSON.stringify(teamData),
    });
  }

  async updateTeamMember(id: string, teamData: any) {
    return this.request<any>(`/team/${id}`, {
      method: 'PUT',
      body: JSON.stringify(teamData),
    });
  }

  async deleteTeamMember(id: string) {
    return this.request<any>(`/team/${id}`, {
      method: 'DELETE',
    });
  }

  // Blog methods
  async getBlogPosts() {
    return this.request<any[]>('/blog');
  }

  async getBlogPost(id: string) {
    return this.request<any>(`/blog/${id}`);
  }

  async createBlogPost(blogData: any) {
    return this.request<any>('/blog', {
      method: 'POST',
      body: JSON.stringify(blogData),
    });
  }

  async updateBlogPost(id: string, blogData: any) {
    return this.request<any>(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogData),
    });
  }

  async deleteBlogPost(id: string) {
    return this.request<any>(`/blog/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;
