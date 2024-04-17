import todosReducer from "./todosSlice";
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        todosState: todosReducer
    }
})
