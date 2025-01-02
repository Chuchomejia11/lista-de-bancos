import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
// import { ChakraProvider } 
import { Provider as ChakraProvider } from '../components/ui/provider'

import store from '../../redux/store';
import '../../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
