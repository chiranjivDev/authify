import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();

app.get('/', (req, res)=>{
    res.send('Running Authify Basic Server...')
})


// Mount routers
app.use('/api/auth', authRoutes);

const PORT=process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow.inverse));