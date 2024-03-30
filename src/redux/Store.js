import { configureStore } from "@reduxjs/toolkit";
import TokenSlice from "./TokenSlice";
import WorkerSlice from './WorkerTokenSlice'
import adminSlice from "./adminTokenSlice";

const store = configureStore({
  reducer: {
    pass: TokenSlice,
    worker: WorkerSlice,
    admin: adminSlice,
  },
});
console.log("store:", store);

export default store;
