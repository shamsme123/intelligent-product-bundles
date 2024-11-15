import express from 'express';
import dotenv from 'dotenv';
import trendsController from './controllers/trendsController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/train-model', trendsController.handleModelTraining);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
