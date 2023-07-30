import {put, takeEvery} from "redux-saga/effects"
import { Actions, decrementCounterAC, incrementCounterAC } from "../store/counterSlice";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* incrementCounter (){
    console.log('Hello');
    yield delay(1000);
    yield put(incrementCounterAC())
}


function* decrementCounter(){
    yield delay(1000)
    yield put(decrementCounterAC())
}

 export function* counterWatcher(){
    yield takeEvery(Actions.ASYNC_INCREMENT, incrementCounter)
    yield takeEvery(Actions.ASYNC_DECREMENT, decrementCounter)
 }