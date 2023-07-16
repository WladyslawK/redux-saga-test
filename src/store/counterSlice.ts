type CounterInitialState = {
    count: number
}

const InitialState: CounterInitialState = {
    count: 0
}


export const counterReducer = (state: CounterInitialState = InitialState, action: ActionsType): CounterInitialState => {
    switch (action.type) {
        case Actions.INCREMENT:
            return { ...state, count: state.count++ }
        case Actions.DECREMENT:
            return { ...state, count: state.count-- }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof incrementCounterAC> |
    ReturnType<typeof decrementCounterAC>

export const incrementCounterAC = () => ({ type: Actions.INCREMENT } as const)
export const decrementCounterAC = () => ({ type: Actions.DECREMENT } as const)

const enum Actions {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}