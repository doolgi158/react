//경상남도_박물관 정보(JSON) 정보 조회
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

// feath 이용한 데이터 확인
const url = 'http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=c774c8dc6067dd3fe310433c57f70141f99f7920c008809925393e181a51c62d&numOfRows=227&pageNo=1&resultType=json';

const App = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setResult(data.getRecommendedKr.item);
    })
    .catch(error => console.log(error));
  },[]);

  return (
    <div className="App">
      <Button variant="primary">기본 버튼</Button>
      <h3>부산광역시_부산도보여행정보 서비스</h3>
        <table className='App-table'>
          <thead>
            <tr>
              <th>콘텐츠 ID</th>
              <th>콘텐츠명</th>
              <th>구분</th>
              <th>위도</th>
              <th>경도</th>
              <th>장소</th>
              <th>제목</th>
              <th>부제목</th>
              <th>교통정보</th>
              <th>편의시설</th>
              <th>이미지 URL</th>
              <th>썸네일 이미지 URL</th>
              <th>상세내용</th>
            </tr>
          </thead>
          <tbody>
            {result.map(item => (
              <tr key={item.UC_SEQ}>
                <td>{item.UC_SEQ}</td>
                <td>{item.MAIN_TITLE}</td>
                <td>{item.CATE2_NM}</td>
                <td>{item.LAT}</td>
                <td>{item.LNG}</td>
                <td>{item.PLACE}</td>
                <td>{item.TITLE}</td>
                <td>{item.SUBTITLE}</td>
                <td>{item.TRFC_INFO}</td>
                <td>{item.MIDDLE_SIZE_RM1}</td>
                <td>{item.MAIN_IMG_NORMAL}</td>
                <td>{item.MAIN_IMG_THUMB}</td>
                <td>{item.ITEMCNTNTS}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
