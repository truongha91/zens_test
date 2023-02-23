import React, {Fragment} from "react";
import ReactLoading from "react-loading";
import "./style.scss";

const Loading = (props) => {
    //*** Declare props ***//
    const {open} = props;
    let yieldLoading = "";
    if(open) {
        yieldLoading = (<div className={"panel-loading"}>
            <ReactLoading className={"loading"} color={"rgb(32 85 39)"} type={"spin"}/>
        </div>);
    }
    return (
        <Fragment>{yieldLoading}</Fragment>
    );
};

export default Loading;
