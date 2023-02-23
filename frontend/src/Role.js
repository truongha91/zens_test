import React, {Fragment, useEffect, useState} from "react";
// import {getUA} from "react-device-detect";
import {_TokenExpired} from "./actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const Role = (props) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    //*** Declare props ***//
    const {
        layout,
        component,
        user
    } = props;

    useEffect(() => {
        window.addEventListener("resize", handleResize.bind(this));
        return () => {
            window.removeEventListener("resize", handleResize.bind(this));
        };
    }, []);

    useEffect(() => {
        window.addEventListener("beforeunload", handleRestoreStorage.bind(this));
        return () => {
            window.removeEventListener("beforeunload", handleRestoreStorage.bind(this));
        };
    });

    const handleRestoreStorage = () => {
        localStorage.setItem("user", JSON.stringify(user));
    };

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    const Layout = layout;
    const Component = component;

    return (
        <Fragment>
            <Layout {...props} widthScreen={windowSize.width} heightScreen={windowSize.height}>
                <Component {...props} widthScreen={windowSize.width} heightScreen={windowSize.height}/>
            </Layout>
        </Fragment>
    );
};

const shareStates = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        _TokenExpired
    }, dispatch);
};

export default connect(shareStates, mapDispatchToProps, null, {forwardRef: true})(Role);