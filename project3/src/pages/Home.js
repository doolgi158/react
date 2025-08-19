import Button from '../component/Button';
import Header from '../component/Header';
import {useState} from "react";
/*import Editor from '../component/Editor';

const Home = () => {
    return(
        <div>
            <Header 
                title={"Home"}
                leftChild={
                    <Button
                        type="positive"
                        text={"긍정 버튼"}
                        onClick={() => {
                            alert("positive 버튼");
                        }}
                    />
                }
                rightChild={
                    <Button
                        type="negative"
                        text={"부정 버튼"}
                        onClick={() => {
                            alert("negative 버튼");
                        }}
                    />
                }
            />
            <Editor
                initData={{
                    date: new Date().getTime(),
                    emotionId: 1,
                    content: "이전 일기",
                }}
                onSubmit={() => {
                    alert("작성 완료");
                }}/>
        </div>
    );
};*/

const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1 }월`;

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            />
        </div>
    );
};

export default Home;