const PageComponent = ({serverData, movePage}) => {
    return (
        <div className="m-6 flex justify-center space-x-2">
            {serverData.prev ?
                <div
                    className="px-4 py-2 text-sm font-medium text-blue-500 bg-white border border-blue-300 rounded-lg shadow-sm hover:bg-blue-50 transition"
                    onClick={() => movePage({page:serverData.prevPage})}
                > Prev </div> : <></>
            }
            
            {serverData.pageNumList.map(pageNum => 
                <div
                    key={pageNum}
                    className={`px-4 py-2 text-sm rounded-lg shadow-sm transition ${serverData.current === pageNum? 'bg-blue-500 text-white font-semibold':'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                    onClick={() => movePage({page:pageNum})}
                >
                    {pageNum}
                </div>
            )}

            {serverData.next ?
                <div
                    className="px-4 py-2 text-sm font-medium text-blue-500 bg-white border border-blue-300 rounded-lg shadow-sm hover:bg-blue-50 transition"
                    onClick={() => movePage({page:serverData.nextPage})}
                > Next </div> : <></>
            }
        </div>
    )
}

export default PageComponent;