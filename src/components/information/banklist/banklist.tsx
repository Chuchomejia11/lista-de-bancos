import React from 'react';
import { Card, CardBody, Image, Button, VStack, Text, Box, Grid, GridItem } from '@chakra-ui/react';
import { BankCard } from '../bankCard'
type Bank = {
  bankName: string;
  description: string;
  age: number;
  url: string;
};

type BankListProps = {
  banks: Bank[]; // Los bancos vienen como prop
  
};

export const BankList: React.FC<BankListProps> = ({ banks }) => {
  return (
    <Box padding="4">
      <Grid
        templateColumns='repeat(12, 1fr)' gap={4} >
        {banks.map((bank, index) => (
          <GridItem key={index} colSpan={{base:6, md: 3}}>
            <BankCard bank={bank}  />
          </GridItem>
        ))}
        
      </Grid>
    </Box>
  );
};
