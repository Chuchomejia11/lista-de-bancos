import React from 'react';
import { Provider } from 'react-redux';

import store from '@/redux/store'; // Importa la tienda de Redux como una importación predeterminada

import { BankList } from '@/components/information/banklist/banklist';

const HomePage: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <BankList />
      </div>
    </Provider>
  );
};

export default HomePage;
