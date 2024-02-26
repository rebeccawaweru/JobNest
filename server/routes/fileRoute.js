import express from 'express';
import { uploadFile } from '../controllers/filesController.js';
import fs from 'fs';

// router object
const fileRoute = express.Router();

// file upload route
fileRoute.post('/upload', uploadFile)


export default fileRoute
