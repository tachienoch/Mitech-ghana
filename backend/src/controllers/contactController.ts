import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

// Mock data for contact messages
let contactMessages = [
  {
    _id: '1',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+233 24 987 6543',
    subject: 'Website Development Inquiry',
    message: 'I would like to discuss a custom website development project for my business.',
    status: 'new',
    priority: 'medium',
    createdAt: '2024-01-20T14:30:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  }
];

export const getAllContactMessages = async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      data: contactMessages,
      total: contactMessages.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact messages'
    });
  }
};

export const getContactMessageById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const message = contactMessages.find(msg => msg._id === id);
    
    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Contact message not found'
      });
    }
    
    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact message'
    });
  }
};

export const createContactMessage = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const newMessage = {
      _id: (contactMessages.length + 1).toString(),
      ...req.body,
      status: 'new',
      priority: 'medium',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    contactMessages.push(newMessage);

    res.status(201).json({
      success: true,
      data: newMessage,
      message: 'Contact message sent successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to send contact message'
    });
  }
};

export const updateContactMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const messageIndex = contactMessages.findIndex(msg => msg._id === id);
    
    if (messageIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Contact message not found'
      });
    }

    const updatedMessage = {
      ...contactMessages[messageIndex],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    contactMessages[messageIndex] = updatedMessage;

    res.json({
      success: true,
      data: updatedMessage,
      message: 'Contact message updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update contact message'
    });
  }
};

export const deleteContactMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const messageIndex = contactMessages.findIndex(msg => msg._id === id);
    
    if (messageIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Contact message not found'
      });
    }

    contactMessages.splice(messageIndex, 1);

    res.json({
      success: true,
      message: 'Contact message deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete contact message'
    });
  }
};
