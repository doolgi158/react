import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
    return (
        <div className="p-6 w-full bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6">
                Todo List Page Component
            </div>
            <ListComponent />
        </div>
    );
}

export default ListPage;