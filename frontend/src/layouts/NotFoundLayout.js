import React, {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import "./NotFoundLayout.scss";

const NotFoundLayout = (props) => {

    useEffect(() => {
        document.documentElement.classList.add('other-layout');
        return () => {
            document.documentElement.classList.remove("other-layout");
        };
    }, []);

    return (
        <Fragment>
            <div className="block-wrap-notfound">
                {props.children}
            </div>
        </Fragment>
    );
};

export default connect(null, null, null, {forwardRef: true})(NotFoundLayout);