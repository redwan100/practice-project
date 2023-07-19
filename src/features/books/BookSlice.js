import { createSlice } from "@reduxjs/toolkit";
const initialBooks = {
  books: [
    {
      id: 1,
      title: "English for everyone",
      author: "Redwan",
    },
    {
      id: 2,
      title: "English not for everyone",
      author: "Redwan",
    },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { showBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;
