import {
    ActionSignIn,
    ActionSignOut,
    ActionTokenExpired
} from "./ActionType";

export const _SignIn = (data) => {
    return {
        type: ActionSignIn,
        data: data
    }
};

export const _SignOut = (data) => {
    return {
        type: ActionSignOut,
        data: data
    }
};

export const _TokenExpired = (data) => {
    return {
        type: ActionTokenExpired,
        data: data
    }
};