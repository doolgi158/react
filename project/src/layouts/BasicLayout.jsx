import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({children}) => {
    return (
        <>
            {/* 기존 헤더 대신 BasicMenu*/}
            <BasicMenu />

            {/* 상단 여백 my-5 제거 */}
            <div className="w-full flex flex-col md:flex-row gap-4 p-4 bg-gray-50 min-h-screen">
                <main className="flex-1 bg-white rounded-2xl shadow-sm px-6 py-8">
                    {children}
                </main>
                <aside className="w-full md:w-1/4 bg-white rounded-2xl shadow-sm px-6 py-8">
                    <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Sidebar</h1>
                </aside>
            </div>
        </>
    );
}

export default BasicLayout;