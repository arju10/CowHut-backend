import {NextFunction, Request, Response } from 'express';
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
        message: 'Failed to create user' });
  }
};

 // Get all Users => Route: /api/v1/users (GET)
 export const getAllUsers = async (req: Request, res: Response,Next:NextFunction) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Users retrieved successfully',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Failed to retrieve users',
      error: error
    });
  }
};

// Get a Single User => Route: /api/v1/users/:id (GET)
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'User not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User retrieved successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Failed to retrieve user',
      error: error
    });
  }
};

// Update a Single User => Route: /api/v1/users/:id (PATCH)
export const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'User not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Failed to update user',
      error: error
    });
  }
};


// Delete a User => Route: /api/v1/users/:id ( DELETE)
export const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'User not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User deleted successfully',
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Failed to delete user',
      error: error
    });
  }
};