import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: 'filter',
    initialState:'',
    reducers:{
        text(_, action){
            return action.payload
        }
    }
})

export const {text} = filterSlice.actions;

export const getFilter = state => state.filter;
