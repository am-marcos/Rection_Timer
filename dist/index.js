import express from 'express';
import { connectDB } from './config/connectionDb';
import { port } from './config/config';
import authRoutes from './routes/authRoutes';
import timerRoutes from './routes/timerRoutes';
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/reaction-time', timerRoutes);
connectDB();
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
