import LogoutComponent from "../../components/member/LogoutComponent"
import BasicMenu from "../../components/menus/BasicMenu"

const LogoutPage = () => {
    return (
        <div className="fixed inset-0 z-[1055] flex flex-col bg-gray-50 dark:bg-gray-900">
            <BasicMenu />

            <div className="flex-1 flex items-center justify-center px-4">
                <LogoutComponent></LogoutComponent>
            </div>
        </div>
    );
};

export default LogoutPage;