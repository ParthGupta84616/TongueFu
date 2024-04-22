import { configureStore } from '@reduxjs/toolkit';
import tongueReducer from '../features/tongue_twister/tongueSlice';

const store = configureStore({
  reducer: {
    tongue: tongueReducer,
  },
});

export default store;
