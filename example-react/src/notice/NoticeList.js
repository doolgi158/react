import Notice from './Notice';

const NoticeList = ({list}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                    {list.map((detail) => (<Notice key={detail.no} {...detail} />))}
            </tbody>
        </table> 
    );
};

export default NoticeList;