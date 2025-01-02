import { Box, Image, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

type BankCardProps = {
    bank: {
        bankName: string;
        description: string;
        age: number;
        url: string;
    };
};

export const BankCard: React.FC<BankCardProps> = ({ bank,  }) => {
    const [isSelected, setIsSelected] = useState(false);


    const handleSelectBank = () => {
        console.log('selectedbank')
    };

    return (
        <Box
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            maxW="300px"
            width="100%"
            bg="white"
        >
            {/* Contenedor de imagen con tamaño fijo */}
            <Box
                w="100px"
                h="100px"
                mb={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                borderRadius="full"
            >
                <Image
                    src={bank.url}
                    alt={bank.bankName}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
            </Box>

            
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                {bank.bankName}
            </Text>
            <Button
                onClick={()=>console.log('set')}
                colorScheme={isSelected ? "red" : "blue"}
            >
                {isSelected ? "Deseleccionar" : "Ver más"}
            </Button>
        </Box>
    );
};