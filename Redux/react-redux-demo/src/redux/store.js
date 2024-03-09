import { createStore ,applyMiddleware} from "redux"
import logger from "redux-logger";
import rootReducers from "./rootReducers";

const store = createStore(rootReducers,applyMiddleware(logger))
export default store; // provides this store to a react application => to do this react-redux library provides a component called provider
