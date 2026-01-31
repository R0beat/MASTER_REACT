import { configureStore } from '@reduxjs/toolkit';
import systemSlice from './slices/systemSlice';

export const store = configureStore({
    reducer: {
        system: systemSlice,
    }
});