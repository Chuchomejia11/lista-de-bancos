import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

const fetchBanks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiUrl = 'https://dev.obtenmas.com/catom/api/challenge/banks';
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching banks:', error);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
};

// Exportar la función como módulo por defecto
export default fetchBanks;