import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import todoRouter from "./todoRouter";
import memberRouter from "./memberRouter";

// 아직 컴포넌트의 처리가 끝나지 않았다면 화면에 'Loading...' 메시지를 보여준다.
const Loading = <div>Loading...</div>
// <Suspense>와 lazy()는 필요한 순간까지 컴포넌트를 메모리상으로 올리지 않도록 지연로딩을 위해 사용
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
//const TodoList = lazy(() => import("../pages/todo/ListPage"))

const root = createBrowserRouter([
    // 경로가 '/' 혹은 아무것도 없을 때는 MainPage 컴포넌트를 보여준다.
    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        /*children: [
            {
                path:"list",
                element: <Suspense fallback={Loading}><TodoList /></Suspense>
            }
        ]*/
       children: todoRouter()
    },
    {
        path: "member",
        children: memberRouter()
    }
]);

export default root;