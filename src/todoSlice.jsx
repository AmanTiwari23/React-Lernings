

import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:"mytodo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,action) =>{
            state.task.push(action.payload);
        }
    }
})

export const {addTask} = todoSlice.actions;
export default todoSlice.reducer;