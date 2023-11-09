// redux/slices/bankSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListBanks {
    listBanks: any;
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

