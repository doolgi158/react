import {useState, useRef} from 'react';

const NoticeForm = ({createContent}) => {
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");

    const testName = useRef();
    const testTitle = useRef();
    const testContent = useRef();

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }
    
    const changeContent = (e) => {
        setContent(e.target.value);
    }

    const inputContent = () => {
        if(name.trim() === ""){
            alert("이름을 입력하세요");
            testName.current.focus();
            return;
        }else if(title.trim() === ""){
            alert("제목을 입력하세요");
            testTitle.current.focus();
            return;
        }else if(content.trim() === ""){
            alert("내용을 입력하세요");
            testContent.current.focus();
            return;
        }

        createContent(name, title, content);
        setName("");
        setTitle("");
        setContent("");
    }

    return(
        <div className="inputForm">
            <div className="form-row">
                <label>작성자</label>
                <input ref={testName} type="text" className="name" onChange={changeName} value={name}></input>
                <label>제목</label>
                <input ref={testTitle} type="text" className="title" onChange={changeTitle} value={title}></input>
                <button type="button" className="inputButton" onClick={inputContent}>등록</button>
            </div>
            <div>
                <div className="form-row">
                    <label>내용</label><br/>
                    <textarea ref={testContent} className="content" onChange={changeContent} value={content}></textarea>
                </div>
            </div>
        </div>
    );
}

export default NoticeForm;