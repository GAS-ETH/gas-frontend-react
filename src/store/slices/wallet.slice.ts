import { createSlice } from '@reduxjs/toolkit';

export const walletSlice = createSlice({
  name: 'Wallet Slice',
  initialState: {
    provider: null,
    signer: null,
  },
  reducers: {
    setProvider: (state, action) => {
      state.provider = action.payload;
    },
    setSigner: (state, action) => {
      state.signer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProvider, setSigner } = walletSlice.actions;

export default walletSlice.reducer;
