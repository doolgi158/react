import LoginComponent from "../../components/member/LoginComponent";
import BasicMenu from "../../components/menus/BasicMenu"

const LoginPage = () => {
    return (
        <div className='fixed inset-0 z-[1055] flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800'>
            <BasicMenu />
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 w-full max-w-md">
                    <div className="flex-1 flex items-center justify-center px-4">
                        <LoginComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;