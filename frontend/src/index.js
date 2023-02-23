import React, {Suspense} from 'react';
import {createRoot} from "react-dom/client";
import CRouter from "./Router";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./saga/RootSaga";
import "antd/dist/reset.css";
import "./index.scss";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: Reducers,
    middleware: [sagaMiddleware],
});

store.subscribe(() => {
    try {
        //ToDo
    } catch (e) {
        console.log(e);
    }
});

sagaMiddleware.run(RootSaga);

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <Suspense fallback="">
            {CRouter}
        </Suspense>
    </Provider>);