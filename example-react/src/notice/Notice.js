import {useState} from "react";

const Notice = ({no, title, name, content, createdDate}) => {
    const [display, setDisplay] = useState(false);

    const displayNotice = () => {
        setDisplay(prev => !prev);
    }

    return (
        <>
            <tr onClick={displayNotice}>
                <td>{no}</td>
                <td>{title}</td>
                <td>{name}</td>
                <td>{new Date(createdDate).toLocaleDateString()}</td>
            </tr>

            {display && (
                <>
                    <tr>
                        <td className="display" colspan="4">
                        <div className="noticeButton">
                            <button className="noticeButtonDetail actionButton" type="button">수정</button><br/>
                            <button className="noticeButtonDelete actionButton" type="button">삭제</button>
                        </div>
                            {content}
                        </td>
                    </tr>
                </>
            )}
        </>
    );
};

export default Notice;