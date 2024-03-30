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
export const {setToken} = tokenSlice.actions;
// console.log('setToken',setToken,'setWorker:',setWorkerToken,'here is the tokens')
export const selectToken = (state) => state.pass.Token;



export default tokenSlice.reducer

