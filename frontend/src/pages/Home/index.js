import React, {Fragment, useEffect, useState} from "react";
import {Button} from "antd";
import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs } from "firebase/firestore";
import {connect} from "react-redux";
import "./style.scss";

const firebaseConfig = {
    apiKey: "AIzaSyAzIMEbpaLPABHmfbAtKODOKcji8VXdLlM",
    authDomain: "zens-test.firebaseapp.com",
    databaseURL: "https://zens-test-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zens-test",
    storageBucket: "zens-test.appspot.com",
    messagingSenderId: "504567204300",
    appId: "1:504567204300:web:e7e926437649642a29f569",
    measurementId: "G-JKYCBMS238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const HomePage = (props) => {
    const [listStory, setListStory] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "stories")).then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                setListStory(doc.data());
            });
            return null;
        });
    }, []);

    return (
        <Fragment>
            <div className="block-home-page">
                <div className="banner">
                    <h1>A joke a day keeps the doctor away</h1>
                    <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
                </div>
                <div className="joke">
                    <div className="wrap-text">
                        <p>A child asked his father, "How were people born?" So his father said, "Adam and Eve made
                            babies, then their
                            babies became adults and made babies, and so on." The child then went to his mother, asked
                            her the same
                            question and she told him, "We were monkeys then we evolved to become like we are now." The
                            child ran back
                            to his father and said, "You lied to me!" His father replied, "No, your mom was talking
                            about her side of the
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
