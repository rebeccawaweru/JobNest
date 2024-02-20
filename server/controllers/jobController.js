const Job = require("../models/jobs").default;


// Create a new job
exports.createJob = async (req, res) => {
 const { title, description, pay, education, responsibilities } = req.body;
 try {
   const job = new Job({ title, description, pay, education, responsibilities });
   const savedJob = await job.save();
   res.status(201).json(savedJob);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while creating the job' });
 }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
 try {
   const job = await Job.find();
   res.json(job);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while fetching job' });
 }
};

// Get a specific job by ID
exports.getJobById = async (req, res) => {
 const jobId = req.params.id;
 try {
   const job = await Job.findById(jobId);
     if (!job) {
       return res.status(404).json({ error: 'job not found' });
       }
       res.json(job);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while fetching the job' });
 }
};

// Update a job by ID
exports.updateJobById = async (req, res) => {
 const jobId = req.params.id;
 const { title, description, pay, education, responsibilities } = req.body;
 try {
   const updatedJob = await Job.findByIdAndUpdate(
   jobId,{ title, description },{ new: true });
   if (!updatedJob) {
       return res.status(404).json({ error: 'job not found' });
   }
   res.json(updatedJob);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while updating the job' });
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