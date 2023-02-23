import React, {Fragment, useState} from "react";
import {Input, Layout} from "antd";
import {_SignOut} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import "./MainLayout.scss";

const MainLayout = (props) => {
    const [openModalAccount, setOpenModalAccount] = useState(false);

    const {Search} = Input;
    const {Header, Footer, Content} = Layout;

    const onSearch = (value) => console.log(value);

    const onOpenModalAccount = (flag) => {
        setOpenModalAccount(flag);
    };

    return (
        <Fragment>
            <div>hello</div>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        _SignOut,
    }, dispatch);
};

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(MainLayout);