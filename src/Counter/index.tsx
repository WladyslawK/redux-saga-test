import { useDispatch, useSelector } from "react-redux"
import { RootStateType, ThunkAppDispatchType } from "../store/store"
import { decrementCounterAC, incrementCounterAC } from "../store/counterSlice";
import { UserType, addUserAC, deleteUserAC, loadUsers } from "../store/usersSlice";
import { useState } from "react";

export const Counter = () => {

    const dispatch = useDispatch<ThunkAppDispatchType>();
    const count = useSelector<RootStateType, number>(state => state.counterReducer.count);
    const users = useSelector<RootStateType, UserType[]>(state => state.userSlice.users);
    const [selectedUser, setSelecteduser] = useState<null | number>(null);
    const incrementHandler = () => dispatch(incrementCounterAC());
    const decrementHandler = () => dispatch(decrementCounterAC());
    const addUserHandler = (name: string | null) => {
        if (name) {
            const user = {
                id: Date.now(),
                name
            }
            dispatch(addUserAC(user))
        }
    }
    const selectUserHandler = (id: number) => setSelecteduser(id)
    const deleteUserhandler = () => {
        if (selectedUser) {
            dispatch(deleteUserAC(selectedUser))
            setSelecteduser(null)
        }
    }
    const loadUsersHandler = () => dispatch(loadUsers())


    const style = {
        border: "1px solid black",
        padding: '0.3em',
        margin: '0.3em 0',
        borderRadius: '40px',
        cursor: 'pointer',
    }


    return (
        <div>
            <h1>Counter</h1>
            <p>value: {count}</p>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={decrementHandler}>decremnent</button>
            <div>
                <button onClick={() => addUserHandler(prompt())}>add user</button>
                <button disabled={selectedUser ? false : true} onClick={deleteUserhandler}>delete user</button>
                <button onClick={loadUsersHandler}>load users</button>
                
                {
                    users.map(user => {
                        const border = selectedUser === user.id ? 'red': 'black'
                        return <div style={{ width: '100%', display: "flex", justifyContent: 'center' }} key={user.id}><span onClick={() => selectUserHandler(user.id)} style={{ ...style, borderColor: `${border}` }} >{user.name}</span></div>
                    }
                    )}
            </div>
        </div>
    )
}