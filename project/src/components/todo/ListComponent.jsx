import { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { getList } from "../../api/todoApi";
import PageComponent from "../common/PageComponent";

const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
};

const ListComponent = () => {
    const {page, size, moveToList, moveToRead, refresh} = useCustomMove();

    // serverData는 나중에 사용
    const [serverData, setServerData] = useState(initState);

    useEffect(() => {
        getList({page, size}).then(data => {
            console.log(data)
            setServerData(data)
        })
    }, [page, size, refresh]);

    return (
        <div className="mt-10 mx-2">
            <div className="flex flex-wrap gap-4 justify-center">
                {serverData.dtoList.map(todo =>
                    <div
                        key= {todo.tno}
                        className="w-full sm:w-[500px] bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer border border-gray-100 p-4"
                        onClick={() => moveToRead(todo.tno)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-bold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                                {todo.tno}
                            </div>
                            <div className="flex-1 mx-4 text-lg font-semibold text-gray-800 truncate">
                                {todo.title}
                            </div>
                            <div className="text-sm text-gray-500">
                                {todo.dueDate}
                            </div>
                        </div>
                    </div>
                )}
            </div>
                <PageComponent 
                    serverData={serverData}
                    movePage={moveToList} />        
        </div>
    );
}

export default ListComponent;