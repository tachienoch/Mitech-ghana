import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

// Mock data for blog posts
let blogPosts = [
  {
    _id: '1',
    title: 'The Future of Custom Software Development',
    slug: 'future-of-custom-software-development',
    excerpt: 'Exploring emerging trends and technologies shaping the future of custom software development.',
    content: 'Custom software development continues to evolve with new technologies and methodologies. In this article, we explore the key trends that will shape the industry in the coming years.',
    author: 'John Doe',
    category: 'Technology',
    tags: ['software', 'development', 'future', 'trends'],
    featuredImage: '/images/blog/software-future.jpg',
    status: 'published',
    featured: true,
    publishDate: '2024-01-15',
    readTime: 8,
    views: 1250,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
];

export const getAllBlogPosts = async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      data: blogPosts,
      total: blogPosts.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog posts'
    });
  }
};

export const getBlogPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogPost = blogPosts.find(post => post._id === id);
    
    if (!blogPost) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }
    
    res.json({
      success: true,
      data: blogPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch blog post'
    });
  }
};

export const createBlogPost = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const newBlogPost = {
      _id: (blogPosts.length + 1).toString(),
      ...req.body,
      views: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    blogPosts.push(newBlogPost);

    res.status(201).json({
      success: true,
      data: newBlogPost,
      message: 'Blog post created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create blog post'
    });
  }
};

export const updateBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogPostIndex = blogPosts.findIndex(post => post._id === id);
    
    if (blogPostIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }

    const updatedBlogPost = {
      ...blogPosts[blogPostIndex],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    blogPosts[blogPostIndex] = updatedBlogPost;

    res.json({
      success: true,
      data: updatedBlogPost,
      message: 'Blog post updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update blog post'
    });
  }
};

export const deleteBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogPostIndex = blogPosts.findIndex(post => post._id === id);
    
    if (blogPostIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }

    blogPosts.splice(blogPostIndex, 1);

    res.json({
      success: true,
      message: 'Blog post deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete blog post'
    });
  }
};
