import {useReducer} from "react";

function reducer(state, action){
    switch (action.type) {
        case "plus":
            return state + action.data;
        case "minus":
            return Math.max(state - action.data, 0);
        case "init":
            return 0;
        default:
            return state;
    }
}

const TestComponent = () => {
    //const [state변수, 상태 변환 촉발 함수] = 생성자(상태를 어떻게 바꿀지 정의한 함수, 초깃값);
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <strong>{count}</strong>
            </div>
            <div>
                <button type="button" onClick={() => dispatch({type:"plus", data:1})}>+</button>{" "}
                <button type="button" onClick={() => dispatch({type:"minus", data:1})}>-</button>{" "}
                <button type="button" onClick={() => dispatch({type:"init"})}>0으로 초기화</button>
            </div>
        </div>
    );
}

export default TestComponent;