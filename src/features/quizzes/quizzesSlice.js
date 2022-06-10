/*
  Create a new slice that is named 'quizzes'
  initialState - contains an object with a properthy 'quizzes equal to empty object
    This inner object will hold all quizzes keyed by id
  reducers -
    addQuiz
      this will recieve payload like: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
  
  When done export selector as well as action creators and reducer
*/

import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export const { addQuiz } = quizzesSlice.actions;
export const selectQuiz = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
