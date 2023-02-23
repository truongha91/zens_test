import {
    ActionSignIn, ActionSignOut, ActionSignInSuccess, ActionSignInFailed, ActionTokenExpired
} from "../actions/ActionType";

let DEFAULT = {
    personal: "",
    avatar: "",
    auth: false,
    type: "",
    message: "",
    sign_in: "sign_out"
};

if (localStorage.getItem("user")){
    DEFAULT = JSON.parse(localStorage.getItem("user"));
}

const UserReducer = (state = DEFAULT, action) => {
    switch (action.type) {
        case ActionSignIn:
            return state;

        case ActionSignInSuccess:
            let dataNew  = action.data;
            return {
                ...state, personal: {
                    ...dataNew
                },
                auth: true, type: "", message: "", sign_in: "sign_in"
            };

        case ActionSignInFailed:
            return {...state, personal: "", auth: false, type: "", message: action.message, sign_in: "error"};

        case ActionTokenExpired:
            let expired = "";
            if (action.data) {
                expired = action.data.status && action.data.status === 401 ? "token_expired" : "";
                return {...state, personal: "", auth: false, type: expired, message: "", sign_in: "sign_out"};
            }
            return {...state};

        case ActionSignOut:
            return {...state, personal: "", auth: false, type: "", message: "", sign_in: action.data.type};

        default:
            return state;
    }
};

export default UserReducer;