import AddComponent from "../../components/todo/AddComponent";

const AddPage = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-6">
            <div className="text-3xl font-extrabold text-gray-800 mb-6">
                Todo Add Page
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <AddComponent />
            </div>
        </div>
    );
}

export default AddPage;