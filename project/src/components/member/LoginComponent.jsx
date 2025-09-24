import { useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
    email: '',
    pw: ''
};

const LoginComponent = () => {
    const [loginParam, setLoginParam] = useState({...initState});

    const {doLogin, moveToPath} = useCustomLogin();

    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value;
        setLoginParam({...loginParam});
    };

    const handleClickLogin = () => {
        doLogin(loginParam) // loginSlice의 비동기 호출
        .then(data => {
            console.log(data);
            if(data.error){
                alert("이메일과 패스워드를 다시 확인해 주세요.");
            }else {
                alert("로그인 성공");
                moveToPath('/');
            }
        });
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-8">
                <div className="text-3xl font-extrabold text-blue-500">Login Component</div>
            </div>

            <div className="mb-6">
                <label className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
                <input className="w-full p-4 rounded-xl border border-gray-300 shadow-sm 
                 text-gray-900 placeholder-gray-400 
                 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    name="email"
                    type={'text'}
                    value={loginParam.email}
                    onChange={handleChange}
                >
                </input>
            </div>
            
            <div className="mb-8">
                <label className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
                <input className="w-full p-4 rounded-xl border border-gray-300 shadow-sm 
                 text-gray-900 placeholder-gray-400 
                 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    name="pw"
                    type={'password'}
                    value={loginParam.pw}
                    onChange={handleChange}
                >
                </input>
            </div>

            <div className="flex justify-center">
                <button className="w-40 py-3 text-lg font-bold text-white bg-blue-500 rounded-xl shadow-md 
                 hover:bg-blue-600 transition"
                    onClick={handleClickLogin}
                >
                    LOGIN
                </button>
            </div>
        </div>
    );
};

export default LoginComponent;