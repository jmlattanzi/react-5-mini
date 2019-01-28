// setup the inital state
const initalState = {
    currentValue: 0,
    previousValues: [],
    futureValues: [],
}

// action types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const REDO = 'REDO'
const UNDO = 'UNDO'

// action creators
export const increment = (amount) => {
    return {
        type: INCREMENT,
        amount,
    }
}

export const decrement = (amount) => {
    return {
        type: DECREMENT,
        amount,
    }
}

export const undo = () => {
    return {
        type: UNDO,
    }
}

export const redo = () => {
    return {
        type: REDO,
    }
}

// reducer
export default function counter(state = initalState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.amount,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues],
            }

        case DECREMENT:
            return {
                currentValue: state.currentValue - action.amount,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues],
            }

        case UNDO:
            return {
                currentValue: state.previousValues[0],
                futureValues: [state.currentValue, ...state.futureValues],
                previousValues: state.previousValues.slice(1),
            }

        case REDO:
            return {
                currentValue: state.futureValues[0],
                futureValues: state.futureValues.slice(1),
                previousValues: [state.currentValue, ...state.previousValues],
            }

        default:
            return state
    }
}
