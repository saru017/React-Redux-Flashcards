import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    // action format: { id: '123', front: 'front of card', back: 'back of card'}
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
});

export const { addCard } = cardsSlice.actions;
export const selectCard = (state) => state.cards.cards;
export default cardsSlice.reducer;
