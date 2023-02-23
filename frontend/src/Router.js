import React, {lazy} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {URL} from "./constants/Path";
import Role from "./Role";
import Layouts from "./layouts";

const Home = lazy(() => import("./pages/Home"));

/* Not fond page*/
const NotFound = lazy(() => import("./pages/NotFound"));

const CRouter = (
    <BrowserRouter>
        <Routes>
            <Route exact
                   path={URL.COMMON.INDEX}
                   element={<Role component={Home}
                                  layout={Layouts.MainLayout}/>}/>
            <Route exact
                   path="*"
                   element={<Role component={NotFound} layout={Layouts.NotFoundLayout}/>}/>
        </Routes>
    </BrowserRouter>
);

export default CRouter;
