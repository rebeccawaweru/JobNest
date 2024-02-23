import express from 'express';

// controller functions
import { loginUser, registerUser } from '../controllers/userController.js';
const router = express.Router()
// CRUD operations imports
import { getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

// login route
router.post('/user/login', loginUser)
// register route
router.post('/user/register', registerUser)
// Get all users
router.get('/users', getAllUsers)
// Get user by ID
router.get('/users/:id', getUserById)
// Update user by ID
router.put('/users/:id', updateUserById)
// Delete user by ID
router.delete('/users/:id', deleteUserById)


export default router
