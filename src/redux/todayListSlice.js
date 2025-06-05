import { createSlice } from "@reduxjs/toolkit";

const todayListSlice = createSlice({
    name: 'todayList',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            // 根據開始時間排序
            state.sort((a, b) => {
                const timeA = a.startTime.replace(':', '');
                const timeB = b.startTime.replace(':', '');
                return timeA.localeCompare(timeB);
            });
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