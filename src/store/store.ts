import { configureStore, createStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { counterReducer } from './counterSlice';

const rootReducer = combineReducers({
    counterReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

// export const store = createStore(rootReducer);