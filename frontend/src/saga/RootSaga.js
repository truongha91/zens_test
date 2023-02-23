import {all} from "redux-saga/effects";
import {WatchUser} from "./UserSaga";

export default function* rootSaga() {
    yield all([
        WatchUser()
    ]);
};
