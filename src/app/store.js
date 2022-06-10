import { configureStore } from '@reduxjs/toolkit';
import topicReducer from '../features/topics/topicsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';
import cardsReducer from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});
