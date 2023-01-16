import { createStore } from "redux";
import counterReducer from "./redux/reducers/CounterReducer";


// create store
const store = createStore(counterReducer);

export default store;
