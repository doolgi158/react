import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
    return (
        <div className="p-6 w-full bg-gray-100 min-h-screen">
            <div className="text-3xl font-extrabold mb-6 text-gray-800">
                Todo List Page Component
            </div>
            <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-6">
                <ListComponent />
            </div>
        </div>
    );
}

export default ListPage;