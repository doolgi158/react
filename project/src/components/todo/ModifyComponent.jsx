import { useEffect, useState } from "react"
import { deleteOne, getOne, putOne } from "../../api/todoApi"
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";

const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: '',
    complete: false
};

const ModifyComponent = ({tno}) => {
    const [todo, setTodo] = useState({...initState})

    // 모달 창을 위한 상태
    const [result, setResult] = useState(null);

    // 이동을 위한 기능들
    const {moveToList, moveToRead} = useCustomMove();

    useEffect(() => {
        getOne(tno).then(data => setTodo(data));
    }, [tno])

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value;
        setTodo({...todo});
    }

    const handleChangeTodoComplete = (e) => {
        const value = e.target.value;
        todo.complete = (value === 'Y');
        setTodo({...todo});
    }

    const handleClickModify = () => { // 수정 버튼 클릭시 
        putOne(todo).then(data => {
            console.log("modify result: " + data);
            setResult('Modified');
        });
    }

    const handleClickDelete = () => {   // 삭제 버튼 클릭시
        deleteOne(tno).then(data => {
            console.log("delete result: " + data);
            setResult('Deleted');
        });
    }

    // 모달 창이 close될때
    const closeModal = () => {
        if(result === 'Deleted') {
            moveToList();
        } else {
            moveToRead(tno);
        }
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {result ? <ResultModal title={'처리결과'} content={result} callbackFn={closeModal}></ResultModal> : <></>}
            
            <div className="flex items-center mb-6">
                <div className="w-1/5 text-right font-bold text-gray-700 pr-6">TNO</div>
                <div className="w-4/5 p-4 rounded-xl border border-gray-200 shadow-sm bg-gray-100">
                    {todo.tno}
                </div>
            </div>
            
            <div className="flex items-center mb-6">
                <div className="w-1/5 text-right font-bold text-gray-700 pr-6">WRITER</div>
                <div className="w-4/5 p-4 rounded-xl border border-gray-200 shadow-sm bg-gray-100">
                    {todo.writer}
                </div>
            </div>

            <div className="flex items-center mb-6">
                <div className="w-1/5 text-right font-bold text-gray-700 pr-6">TITLE</div>
                <input className="w-4/5 p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    name="title"
                    type={'text'}
                    value={todo.title}
                    onChange={handleChangeTodo}
                />
            </div>

            <div className="flex items-center mb-6">
                <div className="w-1/5 text-right font-bold text-gray-700 pr-6">DUEDATE</div>
                <input className="w-4/5 p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    name="dueDate"
                    type={'date'}
                    value={todo.dueDate}
                    onChange={handleChangeTodo}
                />
            </div>

            <div className="flex items-center mb-6">
                <div className="w-1/5 text-right font-bold text-gray-700 pr-6">COMPLETE</div>
                <select className="w-40 p-3 rounded-xl border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    name="status"
                    type={'date'}
                    value={todo.complete ? 'Y' : 'N'}
                    onChange={handleChangeTodoComplete}>
                        <option value='Y'>Completed</option>
                        <option value='N'>Not Yet</option>
                </select>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
                <button type="button"
                    className="w-32 py-3 text-lg font-bold text-white bg-red-500 rounded-xl shadow hover:bg-red-600 transition"
                    onClick={handleClickDelete}
                >
                    Delete
                    </button>
                <button type="button"
                    className="w-32 py-3 text-lg font-bold text-white bg-blue-500 rounded-xl shadow hover:bg-blue-600 transition"
                    onClick={handleClickModify}
                >
                    Modify
                </button>
            </div>
        </div>
    );
}

export default ModifyComponent;