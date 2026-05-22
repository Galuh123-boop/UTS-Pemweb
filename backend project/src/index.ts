import express from 'express';
import cors from 'cors';

import eventRoutes from './routes/eventRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import pembicaraRoutes from './routes/pembicaraRoute.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
  res.status(200).send('Ini adalah API untuk Invofest');
});

// Routes API
app.use('/events', eventRoutes);
app.use('/category', categoryRoutes);
app.use('/pembicara', pembicaraRoutes);

// Export app untuk Vercel Serverless
export default app;