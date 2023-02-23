import React, {Fragment} from "react";
import {URL} from "../../constants/Path";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./style.scss";

const NotFoundPage = (props) => {
    return (
        <Fragment>
            <div className="block-not-found text-center">
                <p>Trang này không khả dụng</p>
                <p>Liên kết bạn truy cập có thể bị hỏng hoặc trang có thể đã bị gỡ.</p>
                <img className="img-fluid" src={URL.IMG + "not-found-1.png"} alt="Not found"/>
                <div className="text-center">
                    <Link to={URL.COMMON.INDEX} className="btn btn-danger"><span>Trang chủ</span></Link>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(null, null, null, {forwardRef: true})(NotFoundPage);
