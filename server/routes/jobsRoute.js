import express from 'express';
import { createJob, getAllJobs, getJobById, updateJobById, deleteJobById} from '../controllers/jobController.js';
const router = express.Router();
// import requireAuth from '../middleware/requireAuth.js';


// requires authentication for all job routes
// router.use(requireAuth)

//Create a job
router.post('/jobs', createJob);

//Get all jobs
router.get('/jobs', getAllJobs);

// Get a specific job by ID
router.get('/jobs/:id', getJobById);

// Update a job by ID
router.put('/jobs/:id', updateJobById);

// Delete a job by ID
router.delete('/jobs/:id', deleteJobById);

export default router;
