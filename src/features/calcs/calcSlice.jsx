import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState: initialState,
  reducers: {
    add: (currentState, action) => {
      const sum =
        Number(action.payload.firestNumberInout) +
        Number(action.payload.secndNumberInput);
      currentState.result = sum;
    },
    sub: (currentState, action) => {
      const sub =
        Number(action.payload.firestNumberInout) -
        Number(action.payload.secndNumberInput);
      currentState.result = sub;
    },
    mul: (currentState, action) => {
      const mul =
        Number(action.payload.firestNumberInout) *
        Number(action.payload.secndNumberInput);
      currentState.result = mul;
    },
    div: (currentState, action) => {
      const div =
        Number(action.payload.firestNumberInout) /
        Number(action.payload.secndNumberInput);
      currentState.result = div;
    },
  },
});

export const { add, sub, mul, div } = calcSlice.actions;

export default calcSlice.reducer;
