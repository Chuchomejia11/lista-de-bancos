import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  displayedBank: null, 
};

const sliceBankDisplayed = createSlice({
  name: 'bankDisplayed',
  initialState,
  reducers: {
    setDisplayedBank: (state, action: PayloadAction< any | null>) => {
      state.displayedBank = action.payload;
    },
  },
});

export const { setDisplayedBank } = sliceBankDisplayed.actions;
export default sliceBankDisplayed.reducer;
