import React, {Fragment, useEffect, useState, useCallback, useRef} from "react";
import {Button} from "antd";
import {initializeApp} from "firebase/app";
import Loading from "../../components/Loading";
import {getFirestore, query, collection, getDocs} from "firebase/firestore";
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
    const isRendered = useRef(false);
    const [loading, setLoading] = useState(false);
    const [listStory, setListStory] = useState([]);

    const hdlListStory = useCallback((trigger = false) => {
        if (trigger) {
            isRendered.current = false;
        }
        setLoading(true);
        const q = query(collection(db, "stories"));
        getDocs(q).then(queryFt => {
            if (!isRendered.current) {
                setLoading(false);
                let tempStoryNew = [];
                queryFt.forEach((docFt) => {
                    let outDt = docFt.data();
                    if (!outDt.like.includes("jim_hls") && !outDt.dislike.includes("jim_hls")) {
                        tempStoryNew.push(docFt.data());
                    }
                });
                setListStory(tempStoryNew);
            }
            return null;
        }).catch(error => {
            console.log(error);
            if (!isRendered.current) {
                setLoading(false);
                console.log("HomePage - hdlListStory");
            }
        });
        return () => {
            isRendered.current = true;
        };
    }, []);

    useEffect(() => {
        if (!isRendered.current) {
            hdlListStory();
        }
        return () => {
            isRendered.current = true;
        };
    }, [hdlListStory]);

    const yieldStory = () => {
        if (listStory.length > 0) {
            return <>
                <p>
                    {listStory[0].content}
                </p>
            </>
        } else {
            return <>
                <p>That's all the jokes for today! Come back another day!</p>
            </>;
        }
    };

    return (
        <Fragment>
            <div className="block-home-page">
                <div className="banner">
                    <h1>A joke a day keeps the doctor away</h1>
                    <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
                </div>
                <div className="joke">
                    <div className="wrap-text">
                        {yieldStory()}
                    </div>
                    <div className="wrap-action">
                        <div className="box-button-event">
                            <Button className="btn-like ant-btn-lg"
                                    disabled={!listStory.length}
                                    htmlType="button">
                                <span>This is Funny!</span>
                            </Button>
                            <Button className="btn-unlike ant-btn-lg"
                                    disabled={!listStory.length}
                                    htmlType="button">
                                <span>This is not funny!</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Loading open={loading}/>
        </Fragment>
    );
};

export default connect(null, null, null, {forwardRef: true})(HomePage);
