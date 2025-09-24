import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BasicMenu = () => {
    const loginState = useSelector(state => state.loginSlice);

    return (
        <nav id="navbar" className="w-full bg-white border-b border-gray-200 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <ul className="flex items-center space-x-8 text-gray-700 font-semibold">
                    <li>
                        <Link to={"/"} className="text-lg hover:text-blue-600 transition-colors">Main</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="text-lg hover:text-blue-600 transition-colors">About</Link>
                    </li>
                    {
                        loginState.email ?  // 로그인한 사용자만 출력되는 메뉴
                            <>
                            
                                <li>
                                    <Link to={'/todo/'} className="text-lg hover:text-blue-600 transition-color">Todo</Link>
                                </li>
                            </>
                        :
                        <></>
                    }
                </ul>
            </div>

            <div className="px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-md transition">
                {!loginState.email ?
                    <div className="block text-center">
                        <Link to={'/member/login'}
                        className="px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-xl shadow-md hover:bg-blue-600 transition block text-center">
                            Login
                        </Link>
                    </div>
                    :
                    <div className="text-white text-sm m-1 rounded">
                        <Link to={'/member/logout'}
                        className="px-6 py-3 text-sm font-semibold text-white bg-red-500 rounded-xl shadow-md hover:bg-red-600 transition block text-center">Logout</Link>
                    </div>
                }
            </div>
        </nav>
    );
}

export default BasicMenu;