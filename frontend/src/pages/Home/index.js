import React, {Fragment} from "react";
import {Button} from "antd";
import {connect} from "react-redux";
import "./style.scss";

const HomePage = (props) => {
    return (
        <Fragment>
            <div className="block-home-page">
                <div className="banner">
                    <h1>A joke a day keeps the doctor away</h1>
                    <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
                </div>
                <div className="joke">
                    <div className="wrap-text">
                        <p>A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their
                            babies became adults and made babies, and so on." The child then went to his mother, asked her the same
                            question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back
                            to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the
                            family."</p>
                    </div>
                    <div className="wrap-action">
                        <div className="box-button-event">
                            <Button className="btn-like ant-btn-lg"
                                    htmlType="button">
                                <span>This is Funny!</span>
                            </Button>
                            <Button className="btn-unlike ant-btn-lg"
                                    htmlType="button">
                                <span>This is not funny!</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(null, null, null, {forwardRef: true})(HomePage);
