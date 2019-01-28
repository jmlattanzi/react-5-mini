const initalState = {
    currentValue: 0,
    previousValues: [],
    futureValues: [],
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const REDO = 'REDO'
const UNDO = 'UNDO'

export default function counter(state = initalState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                currentValue: state.currentValue + action.amount,
            }

        case DECREMENT:
            return {
                ...state,
                currentValue: state.currentValue - action.amount,
            }

        case REDO:
            return {
                // yeet
            }

        case UNDO:
            return {
                // yeetus
            }

        default:
            return state
    }
}

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
