import { Schema, model } from 'mongoose';

const jobData = new Schema({
    poster: String,
    logo: String,
    company: String,
    title: String,
    category: String,
    location: String,
    type: String,
    about: String,
    education: String,
    responsibilities: String,
    currency: String,
    salary: String,
    deadline: String,
    skills: [String]
});

const Job = model('job', jobData);
export default Job;
// module.exports = Job;