import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Coin,CryptoState } from "../types/types";

//API CALL
const ApiUrl= process.env.REACT_APP_POST_URL as string ;
export const fetchCoins = createAsyncThunk<Coin[]>('crypto/fetchCoins' , async () => {
        const response = await axios.get(ApiUrl)
        return response.data;
})

//INITIALSTATE

const initialState :CryptoState ={
    items:[],
    status:'idle',
    error:null,
}

//create slice

const cryptoSlice =createSlice({
    name:'crypto',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(fetchCoins.pending , (state) => {
                state.status ='loading';
            })
            .addCase(fetchCoins.fulfilled , (state , action : PayloadAction<Coin[]>) => {
                state.status  ='succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCoins.rejected , (state,action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Failed to fetch';
            })
    }
})

export default cryptoSlice.reducer;