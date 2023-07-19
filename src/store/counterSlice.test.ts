import { counterReducer, decrementCounterAC, incrementCounterAC } from "./counterSlice"

describe('counterSlice', () => {
    it('should increment counter', () => {
        const state = { count: 2}
        const newState = counterReducer(state, incrementCounterAC())

        expect(newState.count).toBe(3)
    })
    it('should decrement counter', () => {
        const state = { count: 2}
        const newState = counterReducer(state, decrementCounterAC())

        expect(newState.count).toBe(1)
    })
})