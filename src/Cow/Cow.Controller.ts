import { Request, Response } from 'express';
import CowModel from './Cow.Model';

// Create a new Cow => Route: /api/v1/cows (POST)
export const createCow = async (req: Request, res: Response) => {
  try {
    const cowData = req.body;
    const createdCow = await CowModel.create(cowData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cow created successfully',
      data: createdCow,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Failed to create cow',
      error: error,
    });
  }
};

// Get all Cows => Route: /api/v1/cows (GET)
export const getAllCows = async (req: Request, res: Response) => {
    try {
      const cows = await CowModel.find();
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Cows retrieved successfully',
        data: cows,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: 'Failed to retrieve cows',
        error: error
      });
    }
  };
  
// Get a Single Cow => Route: /api/v1/cows/:id (GET)
export const getCowById = async (req: Request, res: Response) => {
    try {
      const cowId = req.params.id;
      const cow = await CowModel.findById(cowId);
      if (!cow) {
        return res.status(404).json({
          success: false,
          statusCode: 404,
          message: 'Cow not found',
          data: null,
        });
      }
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Cow retrieved successfully',
        data: cow,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: 'Failed to retrieve cow',
        error: error
      });
    }
  };
  


// Update a Single Cow =>  Route: /api/v1/cows/:id (PATCH)
export const updateCow = async (req: Request, res: Response) => {
    try {
      const cowId = req.params.id;
      const updateData = req.body;
      const updatedCow = await CowModel.findByIdAndUpdate(cowId, updateData, { new: true });
      if (!updatedCow) {
        return res.status(404).json({
          success: false,
          statusCode: 404,
          message: 'Cow not found',
          data: null,
        });
      }
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Cow updated successfully',
        data: updatedCow,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: 'Failed to update cow',
        error: error
      });
    }
  };

  // Delete a Cow => Route: /api/v1/cows/:id ( DELETE)
export const deleteCow = async (req: Request, res: Response) => {
    try {
      const cowId = req.params.id;
      const deletedCow = await CowModel.findByIdAndDelete(cowId);
      if (!deletedCow) {
        return res.status(404).json({
          success: false,
          statusCode: 404,
          message: 'Cow not found',
          data: null,
        });
      }
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Cow deleted successfully',
        data: deletedCow,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: 'Failed to delete cow',
        error: error
      });
    }
  };


