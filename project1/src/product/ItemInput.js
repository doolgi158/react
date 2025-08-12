const ItemInput = ({form, handleChange, onCreate}) => {
    const {no, name, price, quantity} = form;   //구조 분해 할당

    return(
        <form className='Add'>
            <h1>상품 입력</h1>
            <table>
                <tbody>
                    <tr>
                        <td>no</td>
                        <td>
                            <input
                                type="text"
                                name="no"
                                value={no}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>상품명</td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>가격</td>
                        <td>
                            <input
                                type="text"
                                name="price"
                                value={price}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>수량</td>
                        <td>
                            <input
                                type="text"
                                name="quantity"
                                value={quantity}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="button" onClick={onCreate}>등록</button>
            </div>
        </form>
    );
};

export default ItemInput;