const ResultModal = ( {title, content, callbackFn} ) => {
    return ( 
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm`}  
            onClick={() => {
                if(callbackFn) {
                    callbackFn();
                }
            }}
        >
        
        <div 
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-[90%] max-w-md mx-auto">
                <div className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
                    {title}
                </div>
                <div className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6">
                    {content}
                </div>
                
                <div className="flex justify-center space-x-4">
                    <button 
                        className="w-32 py-3 text-lg font-semibold text-white bg-blue-500 rounded-xl shadow-md hover:bg-blue-600 transition" 
                        onClick={() => {
                            if(callbackFn) {
                                callbackFn()
                            }
                        }}
                    >
                        Close Modal
                    </button>
                </div>
            </div>
      </div>  
     );
  }
   
  export default ResultModal;