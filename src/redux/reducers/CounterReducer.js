import { DECREMENT, INCREMENT, RESET } from "../Constants/counterConstants";

const initialCounter = {
    count: 0
}
// create counter reducer
const counterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: initialCounter
            }
    
        default:
            return state;
    }
};

export default counterReducer;