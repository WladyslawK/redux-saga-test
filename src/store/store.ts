import { configureStore, createStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk, {ThunkDispatch} from "redux-thunk";
import { combineReducers, AnyAction, applyMiddleware } from "redux";
import { counterReducer } from './counterSlice';
import { userSlice } from './usersSlice'; 
import createSagaMiddleware from 'redux-saga'; 
import { counterWatcher } from "../saga/counterSaga";

const rootReducer = combineReducers({
    counterReducer,
    userSlice,
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

export type RootStateType = ReturnType<typeof rootReducer>

export type ThunkAppDispatchType = ThunkDispatch<RootStateType, any, AnyAction>

 sagaMiddleware.run(counterWatcher)