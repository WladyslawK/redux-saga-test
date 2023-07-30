type CounterInitialState = {
    count: number
}

const InitialState: CounterInitialState = {
    count: 0
}


export const counterReducer = (state: CounterInitialState = InitialState, action: ActionsType): CounterInitialState => {
    switch (action.type) {
        case Actions.INCREMENT:
            return { ...state, count: state.count + 1 }
        case Actions.DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof incrementCounterAC> |
    ReturnType<typeof decrementCounterAC>

export const incrementCounterAC = () => ({ type: Actions.INCREMENT } as const)
export const asyncIncrementCounterAC = () => ({ type: 'ASYNC_INCREMENT' } as const)
export const decrementCounterAC = () => ({ type: Actions.DECREMENT } as const)
export const asyncDecrementCounterAC = () => ({ type: Actions.ASYNC_DECREMENT } as const)

export const enum Actions {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    ASYNC_INCREMENT = 'ASYNC_INCREMENT',
    ASYNC_DECREMENT = 'ASYNC_DECREMENT',
}