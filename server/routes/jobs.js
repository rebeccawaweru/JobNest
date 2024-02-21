const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
import requireAuth from '../middleware/requireAuth.js';

// requires authentication for all job routes
router.use(requireAuth)

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

module.exports = router;
