import express from 'express';
import { createCow, deleteCow, getAllCows, getCowById, updateCow } from './Cow.Controller';


const router = express.Router();

// Create a New cow
router.post('/cows', createCow);

// Get All Cows
router.get('/cows',getAllCows);

// Get a single Cow
router.get('/cows/:id',getCowById);

// Update a single Cow
router.patch('/cows/:id',updateCow);

// Delete a single Cow
router.delete('/cows/:id',deleteCow);

export default router;