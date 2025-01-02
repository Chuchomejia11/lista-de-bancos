// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import sliceBanks from './slices/sliceBanks';
import sliceBankDisplayed from './slices/sliceBankDisplayed';
import sliceTheme from './slices/sliceTheme'
const store = configureStore({
  reducer: {
    banks: sliceBanks,
    bankDisplayed: sliceBankDisplayed,
    colorTheme: sliceTheme,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store; 
