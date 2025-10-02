import { Request, Response } from 'express';

// Mock analytics data
const analyticsData = {
  overview: {
    totalServices: 8,
    totalProducts: 12,
    totalAppointments: 45,
    totalInquiries: 23,
    totalTestimonials: 18,
    totalTeamMembers: 6,
    totalBlogPosts: 15,
    monthlyGrowth: 12.5
  },
  appointments: {
    pending: 8,
    confirmed: 15,
    completed: 18,
    cancelled: 4
  },
  inquiries: {
    new: 5,
    inProgress: 8,
    resolved: 10
  },
  testimonials: {
    pending: 3,
    approved: 14,
    rejected: 1
  },
  blog: {
    published: 12,
    draft: 2,
    archived: 1
  },
  traffic: {
    dailyVisitors: 245,
    monthlyVisitors: 7350,
    bounceRate: 32.5,
    avgSessionDuration: '2:45'
  }
};

export const getAnalytics = async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      data: analyticsData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch analytics data'
    });
  }
};

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const stats = {
      services: analyticsData.overview.totalServices,
      products: analyticsData.overview.totalProducts,
      appointments: analyticsData.overview.totalAppointments,
      inquiries: analyticsData.overview.totalInquiries,
      testimonials: analyticsData.overview.totalTestimonials,
      teamMembers: analyticsData.overview.totalTeamMembers,
      blogPosts: analyticsData.overview.totalBlogPosts
    };

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch dashboard stats'
    });
  }
};
