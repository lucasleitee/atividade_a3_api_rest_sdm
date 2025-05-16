import express from 'express';
import customerRoutes from './routes/customerRoutes.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/api', customerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
