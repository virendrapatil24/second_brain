import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import userRouter from './routes/user.routes';
import contentRouter from './routes/content.routes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api/v1/user', userRouter)
app.use('/api/v1/content', contentRouter)

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGO_URI || '';
        if (!mongoURI) {
            throw new Error('MongoDB connection string is not defined in .env');
        }

        await mongoose.connect(mongoURI);
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
}

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Application is up and runnning.' })
});

const startServer = async (): Promise<void> => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (err) {
        console.error('Error starting server:', err);
    }
}

startServer();