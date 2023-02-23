import {
    ActionSignIn, ActionSignInSuccess, ActionSignInFailed
} from "../actions/ActionType";
import {put, call, takeLatest} from "redux-saga/effects";

function* SignIn(action) {
    try {
        // const params = action.data;
        // const reqFt = {
        //     username: params.username,
        //     password: params.password
        // };
        // const fetchSignIn = () => User.SignIn(reqFt).then(ft => {
        //     return ft;
        // }).catch(error => {
        //     return error;
        // });
        // const resSignIn = yield call(fetchSignIn);
        // if (resSignIn) {
        //     if (resSignIn.message) {
        //         yield put({
        //             type: ActionSignInFailed,
        //             message: resSignIn.message ? resSignIn.message : ""
        //         });
        //     } else {
        //         const dataUser = resSignIn.data.data;
        //         yield put({
        //             type: ActionSignInSuccess,
        //             data: dataUser
        //         });
        //     }
        // } else {
        //     yield put({
        //         type: ActionSignInFailed,
        //         message: msg.disconnect
        //     });
        // }
    } catch (error) {
        yield put({
            type: ActionSignInFailed,
            message: error.message ? error.message : error.name
        });
    }
}

// function* RecoverPassword(action) {
//
// }
//
// function* Register(action) {
//
// }

export function* WatchUser() {
    yield takeLatest(ActionSignIn, SignIn);
}
