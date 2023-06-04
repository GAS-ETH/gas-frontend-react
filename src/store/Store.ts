import { configureStore } from '@reduxjs/toolkit'
import walletSlice from './slices/wallet.slice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})
export default configureStore({
    reducer: {
        wallet: walletSlice
    },
    middleware: customizedMiddleware
})