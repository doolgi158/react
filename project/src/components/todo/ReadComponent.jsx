import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: null,
    complete: false
};

const ReadComponent = ({tno}) => {
    const [todo, setTodo] = useState(initState); // 아직 toto는 사용하지 않음
    const {moveToList, moveToModify} = useCustomMove();

    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data)
            setTodo(data)
        })
    }, [tno])

    return (
        <div className="bg-white border border-gray-300 shadow-lg rounded-xl mt-10 m-4 p-6">
            <div className="space-y-4">
                {makeDiv('Tno', todo.tno)}
                {makeDiv('Writer', todo.writer)}
                {makeDiv('Title', todo.title)}
                {makeDiv('Due Date', todo.dueDate)}
                {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}
            </div>
            {/* buttons...start */}
            <div className="flex justify-end p-4">
                <button type="button"
                    className="rounded-lg p-3 m-2 text-lg w-32 text-white bg-gray-600 hover:bg-gray-700 shadow-md"
                    onClick={() => moveToList()}
                >
                    List
                </button>

                <button type="button"
                    className="rounded-lg p-3 m-2 text-lg w-32 text-white bg-blue-600 hover:bg-blue-700 shadow-md"
                    onClick={() => moveToModify(tno)}
                >
                    Modify
                </button>
            </div>
        </div>
    )
};

const makeDiv = (title, value) => 
    <div className="flex items-center">
        <div className="w-1/4 text-right font-semibold text-gray-600 pr-4">{title}</div>
        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-800 shadow-sm">
            {value}
        </div>
    </div>

export default ReadComponent;