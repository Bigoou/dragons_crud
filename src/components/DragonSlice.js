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
      },
    dragonUpdated(state, action) {
        const { name, age } = action.payload;
        const existingDragon = state.find((dragon) => dragon.name === name);
        if (existingDragon) {
            existingDragon.name = name;
            existingDragon.age = age;
        }
      },
  },
});

export const { addDragon } = dragonsSlice.actions;
export const { dragonUpdated } = dragonsSlice.actions;

export default dragonsSlice.reducer;