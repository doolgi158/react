import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({children}) => {
    return (
        <>
            {/* 기존 헤더 대신 BasicMenu*/}
            <BasicMenu />

            {/* 상단 여백 my-5 제거 */}
            <div className="w-full flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
                <main className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-md px-8 py-10">
                    {children}
                </main>
                <aside className="w-full md:w-1/4 bg-white border border-gray-200 rounded-2xl shadow-md px-8 py-10">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Sidebar</h1>
                </aside>
            </div>
        </>
    );
}

export default BasicLayout;