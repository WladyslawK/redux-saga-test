import {useDispatch, useSelector} from "react-redux"
import { RootStateType } from "../store/store"

export const Counter = () => {
    

    const count = useSelector<RootStateType, number>(state => state.counterReducer.count);
    
    return (
        <div>
            <h1>Counter</h1>
            <p>value: {count}</p>
            <button>increment</button>
            <button>decremnent</button>

        </div>
    )
}