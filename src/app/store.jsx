import { configureStore } from "@reduxjs/toolkit";
import calcReduser from "../features/calcs/calcSlice";

export const store = configureStore({
  reducer: {
    calc: calcReduser,
  },
});
