// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";
//1
const TodoSlice = createSlice({
    name: "toolbox",
    initialState: {
        value: "",
        todoList: []
    },
    reducers: {
        setValue: (state, descObj) => {
            console.log("I am set value",
                descObj.payload);
            state.value = descObj.payload;
        },
        addtask: (state, descObj) => {
            const task = descObj.payload;
            let newTaskArr = [...state.todoList, task];
            state.todoList = newTaskArr;
            state.value="";
        }
    }

});

export default TodoSlice;