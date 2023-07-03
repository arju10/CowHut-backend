import express from 'express';
import { createUser, deleteSingleUser, getAllUsers, getSingleUser, updateSingleUser } from './User.controller';
const router = express.Router();

router.post('/auth/signup', createUser);

// Get all Users
router.get('/users',getAllUsers);

// Get a Single User
router.get('/users/:id',getSingleUser);

// Update a Single User
router.patch('/users/:id',updateSingleUser);

// Delete a User
router.delete('/users/:id',deleteSingleUser);

export default router;
