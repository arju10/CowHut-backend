import express from 'express';
import { createOrder, getOrderHistory } from './Order.Controller';

const router = express.Router();

// Create a new order
router.post('/orders', createOrder);

// Get the order history
router.get('/orders', getOrderHistory);

export default router;
