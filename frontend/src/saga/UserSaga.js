import {
    ActionSignIn
} from "../actions/ActionType";
import {takeLatest} from "redux-saga/effects";

function* SignIn(action) {

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
