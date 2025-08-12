import {useState} from "react";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";
import ItemInput from "./ItemInput";

const ItemMain = () => {
    const itemDataArray = [
    {
        no: 1,
        name: "CPU",
        price: 350000,
        quantity: 1,
    },
    {
        no: 2,
        name: "메인보드",
        price: 170000,
        quantity: 2,
    },
    {
        no: 3,
        name: "메모리",
        price: 79000,
        quantity: 2,
    },
    ];
    
    const [items, setItems] = useState(itemDataArray);

    //새로운 상품 등록 이벤트 처리 함수
    const [form, setForm] = useState({
        no: 0,
        name: "",
        price: 0,
        quantity: 0,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(
            {...form, [name]: value}
        );
    };

    const onCreate = () => {
        setItems((items) =>
            items.map((form) => 
                items.no === form.no ? {name: [form.name], price: [form.price], quantity: [form.quantity]} : items
            )
        );
        setForm(
            {
                no: "",
                name: "",
                price: 0,
                quantity: 0
            }
        );
        alert("새로운 상품이 등록되었습니다~");
    };

    return(
        <>
            <ItemInput form={form} handleChange={handleChange} onCreate={onCreate} />
            <hr />

            <ItemList items={items} />
            <ItemTotal items={items} />
        </>
    );
};

export default ItemMain;