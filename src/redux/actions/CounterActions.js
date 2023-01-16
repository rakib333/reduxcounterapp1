// create counter actions

import { DECREMENT, INCREMENT, RESET } from "../Constants/counterConstants"

const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
const resetCounter = () => {
    return {
        type: RESET
    }
}

module.exports = {
    incrementCounter,
    decrementCounter,
    resetCounter
}