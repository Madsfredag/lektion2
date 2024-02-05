// index.ts
import express from 'express';
import orderRoutes from './orderRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use(orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
