import UserReducer from "./UserReducer";
import {combineReducers} from "redux";

const reducer = combineReducers({
    user: UserReducer,
});

export default reducer;
