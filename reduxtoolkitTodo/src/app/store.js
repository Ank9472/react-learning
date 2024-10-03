import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer:  todosReducer,
});

export default store;