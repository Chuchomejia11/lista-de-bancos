import Image from 'next/image';
import React from 'react';


type BankCardProps = {
    bank: {
        bankName: string;
        description: string;
        age: number;
        url: string;
    };
};

export const BankCard: React.FC<BankCardProps> = ({ bank }) => {
    return (
        <div className="bank-card-displayed">
            <div className="bank-image-column">
                <Image src={bank.url} alt={bank.bankName} className="bank-image" />
            </div>
            <div className="bank-data-column">
                <h3>{bank.bankName}</h3>
                <p>{bank.description}</p>
                <p>Edad: {bank.age}</p>
            </div>
        </div>
    );

};


