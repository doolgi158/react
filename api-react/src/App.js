import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
/*import Detail from './pages/Detail';
import List from './pages/List';

export const stateContext = React.createContext();

const serviceKey = 'c774c8dc6067dd3fe310433c57f70141f99f7920c008809925393e181a51c62d';

const busanUrl = `http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&resultType=json`;

const gyeongnamUrl = `http://apis.data.go.kr/6480000/gyeongnamtourculture/gyeongnamtourculturelist?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&resultType=json`;
*/
const url = 'http://localhost:8080/api/board/list';
export const BoardStateContext = React.createContext();

const App = () => {
  /*const [result, setResult] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [isRowsLoaded, setIsRowsLoaded] = useState(false);
  const [rows, setRows] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetch(busanUrl)
    .then(response => response.json())
    .then(data => {
      setResult(data.getRecommendedKr.item);
      setIsDataLoaded(true);
    })
    .catch(error => console.log(error));

    fetch(gyeongnamUrl)
    .then(response => response.json())
    .then(data => {
      setRows(data.gyeongnamtourculturelist.body.items.item);
      setIsRowsLoaded(true);
    })
    .catch(error => console.log(error));
  },[]);

  const value = location.pathname === "/list" ? rows : result;

  if(!isDataLoaded && !isRowsLoaded) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }else {
    return (
      <>
        <stateContext.Provider value={value}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/detail/:UC_SEQ' element={<Detail />}/>
            <Route path='/list' element={<List />}/>
          </Routes>
        </stateContext.Provider>
      </>
    );
  }*/

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setResult(data);
      setIsDataLoaded(true);
    })
    .catch(error => console.log(error));
  },[]);

  if(!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다...</div>;
  } else {
      return(
      <>
        <BoardStateContext.Provider value={result}>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </BoardStateContext.Provider>
      </>
    );
  }
};

export default App;