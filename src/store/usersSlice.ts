import { useDispatch } from 'react-redux';
import { ThunkAppDispatchType } from './store';

interface UserState {
    users: UserType[]
}

export type UserType = {
    id: number
    name: string
}

const initialState: UserState  = {
    users: []
}


export const userSlice = (state: UserState = initialState, action: ActionsType) => {
    switch (action.type) {
        case Actions.ADD_USER: 
        return {...state, users: [...state.users, action.payload.user]}
        case Actions.DELETE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload.id)}
            case Actions.LOAD_USERS:
                return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state;
    }
}

export const addUserAC = (user: UserType) => ({type: Actions.ADD_USER, payload: {user}} as const)
export const deleteUserAC = (id: number) => ({type: Actions.DELETE_USER, payload: {id}} as const)
export const loadUsersAC = (users: UserType[]) => ({type: Actions.LOAD_USERS, payload: {users}} as const)

type ActionsType = ReturnType<typeof addUserAC> | ReturnType<typeof deleteUserAC> | ReturnType<typeof loadUsersAC>

const enum Actions {
    ADD_USER = 'Add user',
    DELETE_USER = 'Delete user',
    LOAD_USERS = 'Load users',
}



export const loadUsers = () => (dispatch: ThunkAppDispatchType) => {
    let users = []
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            const users = userParser(json)
            dispatch(loadUsersAC(users))
        })

}



function userParser (data: UsersResponseType[]) {
    return data.map(user => ({ id: user.id, name: user.name }))
}

type UsersResponseType = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}