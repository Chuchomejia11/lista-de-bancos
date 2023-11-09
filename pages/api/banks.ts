import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiUrl = 'https://dev.obtenmas.com/catom/api/challenge/banks';
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching banks:', error);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
};