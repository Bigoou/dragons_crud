import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Néo", age: "350" },
  { name: "Lucien", age: "435" },
];

const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    addDragon: (state, action) => {
      state.push(action.payload);
    }

  },
});

export const { addDragon } = dragonsSlice.actions;

export default dragonsSlice.reducer;