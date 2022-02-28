import { combineReducers, createStore } from "redux";

import { reducer as SignUpReducer } from "../features/signup/reducer";
import { reducer as LogInReducer} from "../features/login/reducer";

const rootReducer = combineReducers({
    signup:SignUpReducer,
    login:LogInReducer
})
export const store = createStore(rootReducer);