import express from 'express';
import * as jobController from '../controllers/jobController.js';
// const jobController = require('../controllers/jobController')
const router = express.Router();


//Create a job
router.post('/jobs', jobController.createJob);

//Get all jobs
router.get('/jobs', jobController.getAllJobs);

// Get a specific job by ID
router.get('/jobs/:id', jobController.getJobById);

// Update a job by ID
router.put('/jobs/:id', jobController.updateJobById);

// Delete a job by ID
router.delete('/jobs/:id', jobController.deleteJobById);

export default router;