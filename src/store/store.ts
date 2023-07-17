import { configureStore, createStore } from "@reduxjs/toolkit";
import thunk, {ThunkDispatch} from "redux-thunk";
import { combineReducers, AnyAction } from "redux";
import { counterReducer } from './counterSlice';
import { userSlice } from './usersSlice';

const rootReducer = combineReducers({
    counterReducer,
    userSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export type ThunkAppDispatchType = ThunkDispatch<RootStateType, any, AnyAction>

// export const store = createStore(rootReducer);