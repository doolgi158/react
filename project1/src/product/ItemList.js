import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <>
            <ul>
                {/*item 속성(props) 값 지정*/}
                {items.map((item) => (
                    <Item key={item.name} item={item}/>
                ))}
            </ul>
        </>
    );
};

export default ItemList;