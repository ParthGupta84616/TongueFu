import { configureStore } from '@reduxjs/toolkit';
import tongueReducer from '../features/tongue_twister/tongueSlice';
// import quizReducer from '../features/quiz/quizSlice';
const store = configureStore({
  reducer: {
    tongue: tongueReducer,
  },
});

export default store;
