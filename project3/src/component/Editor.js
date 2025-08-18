import './Editor.css'
import {useState} from "react";
import {getFormattedDate} from "../util";
import {getEmotionImgById} from "../util";
import Button from "./Button";
import {useNavigate} from "react-router-dom";

const Editor = ({initData, onSubmit}) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });

    const handlechangeDate = (e) => {
        setState({
            ...state, date: getFormattedDate(new Date(e.target.value)),
        });
    };

    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };

    const handleSubmit = () => {
        onSubmit(state);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input
                        type="date"
                        value={state.date}
                        onChange={handlechangeDate}/>
                </div>
            </div>
            <h4>오늘의 감정</h4><br />
            <div className="editor_section mood_box">
                <div>
                    <img src={getEmotionImgById(1)} alt='완전 좋음'/><br/>
                    <label>완전 좋음</label>
                </div>
                <div>
                    <img src={getEmotionImgById(2)} alt='좋음'/><br />
                    <label>좋음</label>
                </div>
                <div>
                    <img src={getEmotionImgById(3)} alt='그럭저럭'/><br />
                    <label>그럭저럭</label>
                </div>
                <div>
                    <img src={getEmotionImgById(4)} alt='나쁨'/><br />
                    <label>나쁨</label>
                </div>
                <div>
                    <img src={getEmotionImgById(5)} alt='끔직함'/><br />
                    <label>끔직함</label>
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea
                        placeholder="오늘의 일기"
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor_section bottom_section">
                <Button
                    text={"취소"}
                    onClick={handleGoBack}/>
                <Button
                    text={"작성 완료"}
                    type={"positive"}
                    onClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default Editor;