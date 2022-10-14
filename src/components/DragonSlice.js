import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Néo", age: "350" },
  { name: "Lucien", age: "435" },
];

const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {},
});

export default dragonsSlice.reducer;