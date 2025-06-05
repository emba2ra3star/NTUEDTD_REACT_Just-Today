import { createSlice } from "@reduxjs/toolkit";

const todayListSlice = createSlice({
    name: 'todayList',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        toggleTaskDone: (state, action) => {
            const task = state[action.payload];
            if (task) {
                task.isDone = !task.isDone;
            }
        },
    },
});

export const { addTask, toggleTaskDone } = todayListSlice.actions;
export default todayListSlice.reducer;