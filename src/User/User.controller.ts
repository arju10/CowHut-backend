import {Request, Response } from 'express';
import UserModel from './User.model';

// Create a new user => Route: /api/v1/auth/signup (POST)
export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserModel.create(req.body);
    
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User created successfully',
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ 
        success: false,
        statusCode: 500,
        message: 'Internal server error' });
  }
};

