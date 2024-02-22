import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import jobRoutes from './routes/jobsRoute.js';

const app = express();
const port = process.env.PORT || 5000;

connect('mongodb://127.0.0.1:27017/jobNest', {
});

app.use(cors());
app.use(json());
app.use('/jobs', jobRoutes);
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});