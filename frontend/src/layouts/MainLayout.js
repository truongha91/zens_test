import React, {Fragment} from "react";
import {Layout} from 'antd';
import {URL} from "../constants/Path";
import {_SignOut} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import "./MainLayout.scss";

const MainLayout = (props) => {
    const {Header, Content, Footer} = Layout;

    return (
        <Fragment>
            <Layout className="block-layout">
                <Header>
                    <div className="block-header">
                        <div className="logo"><img style={{width: 80}}
                                                   src={`${URL.IMG}logo-1.png`}
                                                   alt="Hlsolutions"/></div>
                        <div className="account">
                            <div className="info">
                                <p className="cap">Handicrafted by</p>
                                <p className="name">Jim HLS</p>
                            </div>
                            <div className="avatar">
                                <img src={`${URL.IMG}avatar_flower.png`}
                                     alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div className="site-layout-content">
                        {props.children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    <div className="block-footer">
                        <p>This website is created as part of Hlsolutions program. The materials contained on this
                            website
                            are provided for general
                            information only and do not constitute any form of advice. HLS assumes no responsibility for
                            the
                            accuracy of any particular statement and
                            accepts no liability for any loss or damage which may arise from reliance on the information
                            contained on this site.</p>
                        <p>Copyright 2021 HLS</p>
                    </div>
                </Footer>
            </Layout>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        _SignOut,
    }, dispatch);
};

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(MainLayout);