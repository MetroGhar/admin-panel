import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  floor: [],
};

const floorSlice = createSlice({
  name: "floorplan",
  initialState,
  reducers: {
    floorPlan: (state, action) => {
        // const { name, data } = action.payload;
        //   state.floor[0][name] = data;
        state.floor.push(action.payload)
    },
    removeFloorPlan: (state,action) => {
       state.floor = state.floor.filter((flr, index) => index !== action.payload)
    }
  },
});

export const { floorPlan,removeFloorPlan } = floorSlice.actions;
export default floorSlice.reducer;
