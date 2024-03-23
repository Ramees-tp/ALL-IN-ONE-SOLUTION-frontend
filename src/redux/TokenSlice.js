import {createSlice} from '@reduxjs/toolkit'

const tokenSlice = createSlice({
    name : 'pass',
    initialState : {
        Token : null
    },
    reducers : {
        setToken : (state,action) => {
            state.Token = action.payload
        }
    }
})
console.log("token slice :",tokenSlice);

export const {setToken} = tokenSlice.actions

export const selectToken = (state) => state.pass.Token

export default tokenSlice.reducer

