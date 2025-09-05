

import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:"mytodo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,action) =>{
            state.task.push(action.payload);
        },
        taskDelete:(state,action)=>{
           state.task = state.task.filter(function(key){
            if(key.id!=action.payload.id){
                return true;
            }
           })
        },
        taskComplete :(state,action)=>{
            for(let i =0; i<state.task.length;i++){
                if(state.task[i].id==action.payload.id){
                    state.task[i].status = true;
                }
            }
        },
        taskIncomplete :(state,action)=>{
            for(let i = 0; i<state.task.length; i++){
                if(state.task[i].id == action.payload.id){
                    state.task[i].status = false;
                }
            }
        },
        edittaskSave :(state,action) =>{
            for(let i=0; i<state.task.length; i++){
                if(state.task[i].id == action.payload.id){
                    state.task[i].work = action.payload.newtask;
                }
            }
        }
    }
})

export const {addTask,taskDelete,taskComplete,taskIncomplete,edittaskSave} = todoSlice.actions;
export default todoSlice.reducer;