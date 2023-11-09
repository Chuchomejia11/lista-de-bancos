import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/banks', async (req, res) => {
  try {
    const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching banks:', error);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
