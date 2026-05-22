import express from 'express';
import cors from 'cors';

import eventRoutes from '../src/routes/eventRoute.js';
import categoryRoutes from '../src/routes/categoryRoute.js';
import pembicaraRoutes from '../src/routes/pembicaraRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ini adalah API untuk Invofest');
});

app.use('/events', eventRoutes);
app.use('/category', categoryRoutes);
app.use('/pembicara', pembicaraRoutes);

export default app;