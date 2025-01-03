import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { loadBanks } from '@/redux/slices/sliceBanks';
import './banklist.css';
import { setDisplayedBank } from '@/redux/slices/sliceBankDisplayed';
import { BankCard } from '@/components/information/bankCard/BankCard';
import {Card, CardBody, Image} from "@nextui-org/react";

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
          <Card key={bank.description}>
            <CardBody>
            <div>
            <Image src={bank.url} alt={bank.bankName} className="bank-image" />
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
          </CardBody>
          </Card>
        ))}

      </div>
      {selectedBank && <BankCard bank={selectedBank} />}
    </div>
  );
};
