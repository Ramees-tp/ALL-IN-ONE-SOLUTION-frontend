import { createSlice  } from "@reduxjs/toolkit";

const workerSlice = createSlice({
    name : 'worker',
    initialState : {
        token : null,
    },
    reducers: {
        setWorkerToken : (state, action) =>{
            state.token = action.payload;
        },
    },
});

export const {setWorkerToken} = workerSlice.actions;
export const selectWorkerToken = (state) => state.worker.token;
export default workerSlice.reducer; 