import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

// Mock data for team members
let teamMembers = [
  {
    _id: '1',
    name: 'Michael Asante',
    position: 'Lead Software Developer',
    department: 'Development',
    email: 'michael@mitech.com',
    phone: '+233 24 123 4567',
    bio: 'Experienced full-stack developer with expertise in modern web technologies and enterprise software solutions.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michael-asante',
      github: 'https://github.com/masante',
      twitter: 'https://twitter.com/masante'
    },
    avatar: '/images/team/michael-asante.jpg',
    joinDate: '2022-03-15',
    status: 'active',
    displayOrder: 1,
    createdAt: '2022-03-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
];

export const getAllTeamMembers = async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      data: teamMembers,
      total: teamMembers.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch team members'
    });
  }
};

export const getTeamMemberById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const teamMember = teamMembers.find(member => member._id === id);
    
    if (!teamMember) {
      return res.status(404).json({
        success: false,
        error: 'Team member not found'
      });
    }
    
    res.json({
      success: true,
      data: teamMember
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch team member'
    });
  }
};

export const createTeamMember = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const newTeamMember = {
      _id: (teamMembers.length + 1).toString(),
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    teamMembers.push(newTeamMember);

    res.status(201).json({
      success: true,
      data: newTeamMember,
      message: 'Team member created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create team member'
    });
  }
};

export const updateTeamMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const teamMemberIndex = teamMembers.findIndex(member => member._id === id);
    
    if (teamMemberIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Team member not found'
      });
    }

    const updatedTeamMember = {
      ...teamMembers[teamMemberIndex],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    teamMembers[teamMemberIndex] = updatedTeamMember;

    res.json({
      success: true,
      data: updatedTeamMember,
      message: 'Team member updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update team member'
    });
  }
};

export const deleteTeamMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const teamMemberIndex = teamMembers.findIndex(member => member._id === id);
    
    if (teamMemberIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Team member not found'
      });
    }

    teamMembers.splice(teamMemberIndex, 1);

    res.json({
      success: true,
      message: 'Team member deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete team member'
    });
  }
};
