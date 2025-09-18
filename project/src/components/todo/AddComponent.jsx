import { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    title: '',
    writer: '',
    dueDate: ''
}

const AddComponent = () => {
    const [todo, setTodo] = useState({...initState})

    // 결과 데이터가 있는 경우 ResultModal을 보여준다.
    const [result, setResult] = useState(null)  // 결과 상태

    const {moveToList} = useCustomMove()    // useCustomMove 활용

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    /*const handleClickAdd = () => {
        console.log(todo)
    }*/

    const handleClickAdd = () => {
        postAdd(todo)
        .then(result => {
            console.log(result)
            setResult(result.TNO)   //결과 데이터 변경
            
            // 초기화
            setTodo({...initState})
        }).catch(e => {
            console.error(e)
        });
    }

    const closeModal = () => {
        setResult(null)
        moveToList();   // moveToList() 호출
    }

    return ( 
        <div className = "max-w-2xl mx-auto mt-10 bg-white rounded-xl border border-gray-200 shadow-md p-8"> 
            {/* 모달 처리 */}
            {result ? <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal}/> : <></>}

            <div className="mb-5">
                <div className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">TITLE</div>
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    name="title"
                    type={'text'} 
                    value={todo.title}
                    onChange={handleChangeTodo}
                ></input>
            </div>
            
            <div className="mb-5">
                <div className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">WRITER</div>
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    name="writer"
                    type={'text'} 
                    value={todo.writer}
                    onChange={handleChangeTodo}
                ></input>
            </div>

            <div className="mb-8">
                <div className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">DUEDATE</div>
                <input className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    name="dueDate"
                    type={'date'} 
                    value={todo.dueDate}
                    onChange={handleChangeTodo}
                ></input>
            </div>
            
            <div className="flex justify-end">
                <button 
                    type="button" 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 
                            text-white text-lg font-semibold rounded-lg shadow-md transition"
                    onClick={handleClickAdd}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default AddComponent;