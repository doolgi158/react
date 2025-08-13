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
                <tr>
                    <td className="display" colspan="4">{content}</td>
                </tr>
            )}
        </>
    );
};

export default Notice;