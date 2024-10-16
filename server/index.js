/**import packages */
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

/**import files */
import connectDB from './config/db.js';
import serviceRoutes from './routes/serviceRoutes.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 8000;

//middleewares
app.use(express.json())

//routes
app.use('/api/v1/services', serviceRoutes);

app.listen(port, () => {
    console.log(`Server is running at ${port}`.bgGreen);
})