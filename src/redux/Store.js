import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";
import WorkerTokenSlice from "./WorkerTokenSlice";

const store = configureStore({
  reducer: {
    pass: TokenSlice,
    worker: WorkerTokenSlice,
  },
});
console.log("store:", store);

export default store;
