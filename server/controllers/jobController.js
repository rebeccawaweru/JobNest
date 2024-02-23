import jobModel from '../models/jobsModel.js';

// Create a new job
export const createJob = async (req, res) => {
  try {
    const job = new jobModel(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: console.error(error) });
  }
};

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const job = await jobModel.find();
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: console.error(error) });
  }
};

// Get a specific job by ID
export const getJobById = async (req, res) => {
  const jobId = req.params.id;
  try {
    const job = await jobModel.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: console.error(error) });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: console.error(error) });
  }
};

// Update a job by ID
export const updateJobById = async (req, res) => {
  const jobId = req.params.id;
  try {
    const updatedJob = await jobModel.findByIdAndUpdate(
      jobId, req.body, { new: true });
    if (!updatedJob) {
      return res.status(404).json({ error: console.error() });
    }
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: console.error(error) });
  }
};

// Delete a job by ID
exports.deleteJobById = async (req, res) => {
 const jobId = req.params.id;
 try {
   const deletedJob = await Job.findByIdAndRemove(jobId);
   if (!deletedJob) {
 return res.status(404).json({ error: 'job not found' });
 }
   res.json(deletedJob);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while deleting the job' });
 }
};
