import express from 'express';
import { createUser } from './User.controller';
const router = express.Router();

router.post('/auth/signup', createUser);

export default router;
