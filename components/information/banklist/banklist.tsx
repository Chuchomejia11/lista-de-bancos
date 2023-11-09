import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { loadBanks } from '@/redux/slices/sliceBanks';
import './bankList.css'; // Importa el archivo de estilos CSS
import { setDisplayedBank } from '@/redux/slices/sliceBankDisplayed';
import { BankCard } from '@/components/information/bankCard/BankCard';

type Bank = {
  bankName: string;
  description: string;
  age: number;
  url: string;
};

export const BankList: React.FC = () => {
  const dispatchEvent = useDispatch();
  const BankList = useSelector((state: RootState) => state.banks.listBanks);
  const [ selectedBank, setSelectedBank ] = useState<Bank | null>(null);

  useEffect(() => {
    if (BankList.length === 0) {
      const apiUrl = '/api/banks';

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data: Bank[]) => {
          dispatchEvent(loadBanks(data));
        })
        .catch((error) => {
          console.error('Error fetching banks:', error);
        });
    }
  }, [ dispatchEvent, BankList ]);

  return (
    <div>
      <div className="bank-list-container">
        {BankList.map((bank: any) => (
          <div key={bank.description} className="bank-card">
            <img src={bank.url} alt={bank.bankName} className="bank-image" />
            <h3 className="bank-name">{bank.bankName}</h3>
            <button
              className="view-more-button"
              onClick={() => {
                setSelectedBank(bank);
                dispatchEvent(setDisplayedBank(bank));
              }}
            >
              Ver más
            </button>
          </div>
        ))}

      </div>
      {selectedBank && <BankCard bank={selectedBank} />}
    </div>
  );
};
