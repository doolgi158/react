import { Link } from "react-router-dom";

const BasicMenu = () => {
    return (
        <nav id="navbar" className="w-full bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <ul className="flex items-center space-x-8 text-gray-700 font-semibold">
                    <li>
                        <Link to={"/"} className="text-lg hover:text-blue-500 transition-colors">Main</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="text-lg hover:text-blue-500 transition-colors">About</Link>
                    </li>
                    {/* /todo/ 작성 시작 시 */}
                    <li>
                        <Link to={'/todo/'} className="text-lg hover:text-blue-500 transition-colors">Todo</Link>
                    </li>
                </ul>
            </div>

            <div>
                <div className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full shadow hover:bg-blue-600 transition-colors">
                    Login
                </div>
            </div>
        </nav>
    );
}

export default BasicMenu;