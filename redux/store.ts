// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import sliceBanks from './slices/sliceBanks';

const store = configureStore({
  reducer: {
    banks: sliceBanks,
    // Otros reducers si los tienes
  },
});

export type RootState = ReturnType<typeof store.getState>;

// Exporta RootState como una exportación de miembro


export default store; // Mantiene store como una exportación predeterminada
