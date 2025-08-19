import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import React, {useReducer, useRef, useEffect, useState} from "react";

const day = new Date();
day.setDate(day.getDate() - 1);
const mockData = [
  {
    id: "0",
    data: day.getTime(),
    content: "asdf",
    emotionId: 1,
  },
  {
    id: "1",
    date: new Date(day).setDate(day.getDate() - 1),
    content: "asdfasdf",
    emotionId: 2,
  },
  {
    id: "2",
    date: new Date(day).setDate(day.getDate() - 2),
    content: "asdfawadfawgaczvq2efgasdvzcx",
    emotionId: 3,
  },
];

function reducer(state, action) {
  switch(action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? {...action.data} : it
      );
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
}
// createContext 메서드를 호출해 일기 State 값을 컴포넌트 트리에 공급할 Context를 만든다.
// 이 때 Context를 다른 파일에서 불러올 수 있도록 export로 보낸다.
export const DiaryStateContext = React.createContext();

// 일기 State를 업데이트하는 함수 onCreate, onUpdate, onDelete를 컴포넌트 트리에 공급하는 Context 생성한다
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(3);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
  }, []);
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/diary/:id' element={<Diary />} />
              <Route path='/edit/:id' element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;