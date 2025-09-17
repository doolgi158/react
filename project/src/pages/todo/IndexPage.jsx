import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import { useCallback } from "react";

const IndexPage = () => {
    const navigate = useNavigate()
    
    const handleClickList = useCallback(() => {
        navigate({pathname: 'list'})
    })

    const handleClickAdd = useCallback(() => {
        navigate({pathname: 'add'})
    })
    return (
        <BasicLayout>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 my-4">
                <div className="px-6 py-2 text-lg font-bold text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={handleClickList}>
                    LIST
                </div>
                <div className="px-6 py-2 text-lg font-bold text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-green-500 hover:text-white transition-colors"
                    onClick={handleClickAdd}>
                    ADD
                </div>
            </div>
            <div className="w-full p-4 bg-white rounded-xl shadow-sm">
                <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;