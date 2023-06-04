import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import walletSlice from './slices/wallet.slice';
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export default configureStore({
  reducer: {
    wallet: walletSlice,
  },
  middleware: customizedMiddleware,
});
