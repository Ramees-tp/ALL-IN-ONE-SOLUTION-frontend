import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";

const store = configureStore({
  reducer: {
    pass: TokenSlice,
  },
});
console.log("store:", store);

export default store;
