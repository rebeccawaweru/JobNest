import { Schema, model } from 'mongoose';
import { any } from 'prop-types';

const jobData = new Schema({
 title: { type: String, required: true },
 description: { type: String, required: true },
 pay: { type: Number, required: true },
 education: { type: any, required: false },
 responsibilities: { type: String, required: true }
});

const Job = model('Job', jobData);

export default Job;