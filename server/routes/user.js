import express from 'express';
import requireAuth from '../middleware/requireAuth.js';

// controller functions
import { loginUser, registerUser } from '../controllers/userController.js';
const router = express.Router()

// requires authentication for all job routes
router.use(requireAuth)

// login route
router.post('/login', loginUser)
// register route
router.post('/register', registerUser)


export default router
