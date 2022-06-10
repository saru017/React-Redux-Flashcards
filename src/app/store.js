import { configureStore } from '@reduxjs/toolkit';
import { topicsSlice } from '../features/topics/topicsSlice';

export default configureStore({
  topics: topicsSlice,
  reducer: {},
});
