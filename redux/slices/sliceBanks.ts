// redux/slices/bankSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Bank = {
    bankName: string;
    description: string;
    age: number;
    url: string;
  };
interface ListBanks {
    listBanks: Bank[]
}

const initialState: ListBanks = {
    listBanks: [],
};

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        loadBanks(state, action: PayloadAction<any>) {
            state.listBanks = action.payload;
        },
    },
});

export const { loadBanks } = bankSlice.actions;

export default bankSlice.reducer;

