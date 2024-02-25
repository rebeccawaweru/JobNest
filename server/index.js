import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import jobRoutes from './routes/jobsRoute.js';
import router from './routes/user.js';
import fileRoute from "./routes/fileRoute.js";

dotenv.config();
const app = express();

// middleware
// bodyParser helps to send POST requests

app.use(bodyParser.json({ limit: "50mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}));
app.use(cors());

app.use(express.json());
app.use('/server', jobRoutes);
app.use('/server', router)

app.use('/server/file', fileRoute);


const CONNECTION_URL = process.env.MONGO

const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
