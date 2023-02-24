import React, {Fragment, useEffect, useState, useCallback, useRef} from "react";
import {Button, Modal, Skeleton} from "antd";
import {initializeApp} from "firebase/app";
import Loading from "../../components/Loading";
import {getFirestore, query, collection, doc, getDocs, updateDoc} from "firebase/firestore";
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

    const [modal, contextHolder] = Modal.useModal();

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
                        let tempDocFt = {key: docFt.id, ...docFt.data()};
                        tempStoryNew.push(tempDocFt);
                    }
                });
                setListStory(tempStoryNew);
            }
            return null;
        }).catch(error => {
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

    const onPressFunny = async (data) => {
        setLoading(true);
        let tempLike = data.like;
        tempLike.push("jim_hls");
        const updateStory = doc(db, "stories", data.key);
        await updateDoc(updateStory, {
            "like": tempLike
        }).then(() => {
            document.cookie = `${data.key}_${data.code}=like`;
            setLoading(false);
            hdlListStory();
        }).catch(error => {
            const text = error.message ? error.message : "Lỗi không rõ từ máy chủ";
            modal.warning({
                title: "Thông báo",
                okText: "Đóng",
                centered: true,
                content: text
            });
            setLoading(false);
        });
    };

    const onPressNotFunny = async (data) => {
        setLoading(true);
        let tempLike = data.like;
        tempLike.push("jim_hls");
        const updateStory = doc(db, "stories", data.key);
        await updateDoc(updateStory, {
            "dislike": tempLike
        }).then(() => {
            document.cookie = `${data.key}_${data.code}=dislike`;
            setLoading(false);
            hdlListStory();
        }).catch(error => {
            const text = error.message ? error.message : "Lỗi không rõ từ máy chủ";
            modal.warning({
                title: "Thông báo",
                okText: "Đóng",
                centered: true,
                content: text
            });
            setLoading(false);
        });
    };

    const yieldStory = () => {
        if (loading) {
            return <div className="wrap-text"><Skeleton active /></div>
        }
        if (listStory.length > 0) {
            document.cookie = `${listStory[0].key}_${listStory[0].code}=not_voted_yet`;
            return <>
                <div className="wrap-text">
                    <p>
                        {listStory[0].content}
                    </p>
                </div>
                <div className="wrap-action">
                    <div className="box-button-event">
                        <Button className="btn-like ant-btn-lg"
                                onClick={onPressFunny.bind(this, listStory[0])}
                                htmlType="button">
                            <span>This is Funny!</span>
                        </Button>
                        <Button className="btn-unlike ant-btn-lg"
                                onClick={onPressNotFunny.bind(this, listStory[0])}
                                htmlType="button">
                            <span>This is not funny!</span>
                        </Button>
                    </div>
                </div>
            </>
        }
        if (listStory.length === 0 && !loading) {
            return <>
                <div className="wrap-text">
                    <p>That's all the jokes for today! Come back another day!</p>
                </div>
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
                    {yieldStory()}
                </div>
            </div>
            <Loading open={loading}/>
            {contextHolder}
        </Fragment>
    );
};

export default connect(null, null, null, {forwardRef: true})(HomePage);
