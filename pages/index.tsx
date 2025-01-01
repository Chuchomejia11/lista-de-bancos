import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';

import store from '@/redux/store'; // Importa la tienda de Redux como una importación predeterminada

import { BankList } from '@/components/information/banklist/banklist';

const HomePage: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Vista de bancos</title>
          <meta name="description" content="Vista de una lista de bancos con almacenamiento de estado." />
          <meta name="author" content="J. Jesús Mejia M." />
          
        </Head>
        <h1>Elige el banco del que quieres mas informacionn</h1>
        <BankList />
      </div>
    </Provider>
  );
};

export default HomePage;
