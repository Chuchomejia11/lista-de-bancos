import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { loadBanks } from '@/redux/slices/sliceBanks';

type Bank = {
  bankName: string;
  description: string;
  age: number;
  url: string;
};

export const BankList: React.FC = () => {
  const dispatchEvent = useDispatch();
  const BankList = useSelector((state: RootState) => state.banks.listBanks);

  useEffect(() => {
    if (BankList.length === 0) {
      const apiUrl = 'https://cors-anywhere.herokuapp.com/https://dev.obtenmas.com/catom/api/challenge/banks';
      
      fetch(apiUrl) // Realiza la solicitud a través de CORS Anywhere
        .then((response) => response.json())
        .then((data: Bank[]) => {
          dispatchEvent(loadBanks(data));
        })
        .catch((error) => {
          console.error('Error fetching banks:', error);
        });
    }
  }, [dispatchEvent, BankList]);

  return (
    <div>
      <h1>Lista de Bancos</h1>
      <ul>
        {BankList.map((bank: any) => (
          <div key={bank.description}>
            <h3>{bank.bankName}</h3>
            <p>{bank.description}</p>
            <p>Edad: {bank.age}</p>
            <img src={bank.url} alt={bank.bankName} />
          </div>
        ))}
      </ul>
    </div>
  );
};
