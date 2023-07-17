import {useDispatch, useSelector} from "react-redux"
import { RootStateType } from "../store/store"
import { decrementCounterAC, incrementCounterAC } from "../store/counterSlice";

export const Counter = () => {
    
    const dispatch = useDispatch();
    const count = useSelector<RootStateType, number>(state => state.counterReducer.count);
    const incrementHandler = () => dispatch(incrementCounterAC());
    const decrementHandler = () => dispatch(decrementCounterAC());
    
    return (
        <div>
            <h1>Counter</h1>
            <p>value: {count}</p>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler}>decremnent</button>

        </div>
    )
}