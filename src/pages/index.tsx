import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { BankList } from '../components/information/banklist/banklist';
import { Layout } from '../components/structural/layout';
import { loadBanks } from '../../redux/slices/sliceBanks';
import { toggleTheme } from '../../redux/slices/sliceTheme';
import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
  VStack,
  useColorMode,
  useColorModeValue,
  Checkbox,
} from '@chakra-ui/react';
import { FaCog } from 'react-icons/fa';

const MoonIcon = (props:any) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
};

const SunIcon = (props:any) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
};
const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backgroundColor = useColorModeValue('teal.500', 'gray.800'); // Cambia según el tema
  const textColor = useColorModeValue('white', 'gray.200');
  const footerBackground = useColorModeValue('teal.600', 'gray.900');
  

  const clearSearch = () => {
    console.log("Búsqueda limpiada");
  };
  const banks = useSelector((state: RootState) => state.banks.listBanks);
  const colorTheme = useSelector((state: RootState) => state.colorTheme.colorMode);
  // const [isChecked, setIsCheked] = useState<boolean>(colorTheme === 'dark' ? true : false)

  useEffect(() => {
    // Simula una llamada API para cargar bancos
    const fetchBanks = async () => {
      const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
      const data = await response.json();
      dispatch(loadBanks(data));
    };
    fetchBanks();
  }, [dispatch]);
    return (
      <Layout>
        <Box position={'relative'} minH="100vh">
          <Head>
            <title>Vista de Bancos</title>
            <meta name="description" content="Lista de bancos usando Redux Toolkit." />
            <meta name="author" content="Tu nombre" />
          </Head>
  
          <Box bg={backgroundColor} color={textColor} py={4} px={8} mb={6} h={"15vh"} w="100%">
            <Flex position={'relative'} flexDirection={'row'} margin={'auto'} >
              <Flex textAlign="center" w="100%" margin={'auto'} marginY={'auto'}>
                <Heading as="h1"  textAlign="center" size={{ base: 'lg', md: '2xl', lg: '4xl', xl: '4xl' }}>
                  Encuentra tu banco
                </Heading>
              </Flex>
            </Flex>
          </Box>
  
          <Box py={6} px={4} marginBottom={4}>
            <Text fontSize="xl" mb={2}>
              Elige el banco del que quieres más información:
            </Text>
            <BankList banks={banks} />
          </Box>
  
          {/* Footer */}
          <Box
            bg={footerBackground}
            color={textColor}
            py={4}
            textAlign="center"
            position={'absolute'}
            bottom={'0'}
            width={'100%'}
          >
            <Text>© 2025 Encuentra tu banco. Todos los derechos reservados.</Text>
          </Box>
        </Box>
      </Layout>
    );
  
};

export default HomePage;