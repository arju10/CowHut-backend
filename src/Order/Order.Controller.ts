import { Request, Response } from 'express';
import { OrderDocument } from './Order.Interface';
import OrderModel from './Order.Model';
import CowModel from '../Cow/Cow.Model';
import UserModel from '../User/User.Model';

// Create a new order => Route: /api/v1/orders (POST)
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { cow, buyer } = req.body;

    // Check if the user has enough money to buy the cow
    const buyerInfo = await UserModel.findById(buyer);
    if (!buyerInfo) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Buyer not found',
      });
    }

    const cowInfo = await CowModel.findById(cow);
    if (!cowInfo) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Cow not found',
      });
    }

    const cowPrice = cowInfo.price;
    const buyerBudget = buyerInfo.budget;

    if (buyerBudget < cowPrice) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Insufficient budget to buy the cow',
      });
    }

    // Start the transaction process
    const session = await OrderModel.startSession();
    session.startTransaction();

    try {
      // Update the cow's label to 'sold out'
      await CowModel.findByIdAndUpdate(cow, { label: 'sold out' });

      // Deduct the cow's price from the buyer's budget
      const updatedBuyerBudget = buyerBudget - cowPrice;
      await UserModel.findByIdAndUpdate(buyer, { budget: updatedBuyerBudget });

      // Add the cow's price to the seller's income
      const sellerId = cowInfo.seller;
      const sellerInfo = await UserModel.findById(sellerId);
      if (!sellerInfo) {
        throw new Error('Seller not found');
      }
      const sellerIncome = sellerInfo.income + cowPrice;
      await UserModel.findByIdAndUpdate(sellerId, { income: sellerIncome });

      // Create the order entry
      const order: OrderDocument = await OrderModel.create({ cow, buyer });

      // Commit the transaction
      await session.commitTransaction();
      session.endSession();

      res.status(201).json({
        success: true,
        statusCode: 201,
        message: 'Order created successfully',
        data: order,
      });
    } catch (error) {
      // Abort the transaction on error
      await session.abortTransaction();
      session.endSession();

      throw error;
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Failed to create order',
      error: error,
    });
  }
};



// Get the all order history => Route: /api/v1/orders (GET)
export const getOrderHistory = async (req: Request, res: Response) => {
    try {
      // Retrieve all order documents
      const orders: OrderDocument[] = await OrderModel.find();
  
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Order history retrieved successfully',
        data: orders,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: 'Failed to retrieve order history',
        error: error,
      });
    }
  };