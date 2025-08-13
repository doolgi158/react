import './TodoEditor.css'
import {useState, useRef} from "react";

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const [createdDate, setCreatedDate] = useState("");

    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    
    const onChangeDate = (e) => {
        setCreatedDate(e.target.value);
    };

    const onSubmitContent = () => {
        if(!content.trim()) {
            inputRef.current.focus();
            alert("할 일을 입력하세요!");
            return;
        }else if(!createdDate.trim()) {
            alert("날짜를 입력하세요!");
            return;
        }
        onCreate(content, createdDate);
        setContent("");
    };

    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            onSubmitContent();
        }
    }

    return(
        <div className='TodoEditor'>
            <h4>새로운 할 일 작성하기✏️</h4>
            <div className='editor_wrapper'>
                <input
                    placeholder='새로운 Todo...'
                    value={content}
                    onChange={onChangeContent}
                    ref={inputRef}
                    onKeyDown={onKeyDown}
                />
                <input
                    type="date"
                    value={createdDate}
                    onChange={onChangeDate}
                />
                <button type="button" onClick={onSubmitContent}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;