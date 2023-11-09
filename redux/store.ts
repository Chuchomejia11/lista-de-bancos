// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import sliceBanks from './slices/sliceBanks';
import sliceBankDisplayed from './slices/sliceBankDisplayed';
const store = configureStore({
  reducer: {
    banks: sliceBanks,
    bankDisplayed: sliceBankDisplayed,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store; 
