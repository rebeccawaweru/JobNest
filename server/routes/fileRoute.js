import express from 'express';
import { uploadFile } from '../controllers/filesController';

// router object
const fileRoute = express.Router();

// file upload route
router.post('/upload', uploadFile)

export default fileRoute
