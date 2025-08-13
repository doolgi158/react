import './Notice.css';
import NoticeList from './NoticeList.js';
import {useState} from 'react';

const NoticeMain = () => {
    const allList = [
        {
            no: 1,
            title: "강의장 공지",
            name: "관리자",
            content: "8월 16일(금)~8월 17일(토) 이틀간 학원 내 바닥 및 에어컨 청소 작업이 진행될 예정입니다.이에 따라 8월 14일(내일) 퇴실 시, 의자와 개인 짐을 책상 위로 올려놓은 후 귀가해 주시기 바랍니다.",
            createdDate: new Date().getTime(),
        },
        {
            no: 2,
            title: "설문지 공지",
            name: "관리자",
            content: "우리 반 1차상담 시기가 도래하여 관련 내용 공지합니다. 상담을 위해 사전 설문지 작성을 하고자 하니, 아래 링크를 통해 내용 기재해주세요.",
            createdDate: new Date().getTime(),
        },
        {
            no: 3,
            title: "자습 관리 대장 작성 공지",
            name: "관리자",
            content: "자습 관리 대장 작성 관련하여 공지 한가지 드립니다 :) 보충수업으로 인해 18시 이후 건물을 사용하시는 경우에는 따로 작성하지 않으셔도 됩니다. 아래 내용 참고하시어 앞으로 작성바랍니다!",
            createdDate: new Date().getTime(),
        },
    ];

    const [list, setList] = useState(allList);

    return (
        <div className="container">
            <h2>공지사항</h2><br />
            <button type="button">작성</button>
            <button type="button">수정</button>
            <button type="button">삭제</button>
            <button type="button">검색</button>
            <hr />
            <NoticeList list={list}/>
        </div>
    );
};

export default NoticeMain;