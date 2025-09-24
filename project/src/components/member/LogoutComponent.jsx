//import { useDispatch } from "react-redux"
//import { logout } from "../../slice/loginSlice";

import useCustomLogin from "../../hooks/useCustomLogin";

const LogoutComponent = () => {
    //const dispatch = useDispatch();
    const {doLogout, moveToPath} = useCustomLogin();

    const handleClickLogin = () => {
        //dispatch(logout());
        doLogout()
        alert("로그아웃되었습니다.")
        moveToPath("/")
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-8 bg-white border border-red-200 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-8">
                <div className="text-3xl font-extrabold text-red-500">
                    Logout Component
                </div>
            </div>


            <div className="flex justify-center">
                <button className="w-40 py-3 text-lg font-bold text-white bg-red-500 rounded-xl shadow-md hover:bg-red-600 transition"
                    onClick={handleClickLogin}
                >
                    LOGOUT
                </button>
            </div>
        </div>
    );
};

export default LogoutComponent;