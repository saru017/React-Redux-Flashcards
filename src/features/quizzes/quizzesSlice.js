/*
  Create a new slice that is named 'quizzes'
  initialState - contains an object with a properthy 'quizzes equal to empty object
    This inner object will hold all quizzes keyed by id
  reducers -
    addQuiz
      this will recieve payload like: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
  
  When done export selector as well as action creators and reducer

  write an action creator that returns a thunk and dispatches addQuiz followed by addQuizId
*/

import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

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

export const quizCreator = (quiz) => {
  const { id, topicId } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId: id, topicId: topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
