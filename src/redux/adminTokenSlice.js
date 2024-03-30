import { createSlice  } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        token: null
    },
    reducers: {
        setAdminToken: (state, action) => {
            state.token = action.payload;
        },
    },
})

export const {setAdminToken} = adminSlice.actions;
export const selectAdminToken = (state) => state.admin.token;
export default adminSlice.reducer