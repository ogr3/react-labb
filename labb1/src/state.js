const INCREASE_COUNTER = "INCREASE_COUNTER"
const DECREASE_COUNTER = "DECREASE_COUNTER"

export const increaseCounterAction = {
    type: INCREASE_COUNTER
}

export const decreaseCounterAction = {
    type: DECREASE_COUNTER
}

const initialState = {
    counter: 666
}

export function updateState(oldState = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...oldState,
                counter: Math.max(oldState.counter + 1, 0)
            }
        case DECREASE_COUNTER:
            return {
                ...oldState,
                counter: Math.max(oldState.counter - 1, 0)
            }
        default:
            return {
                ...oldState
            };
    }
}