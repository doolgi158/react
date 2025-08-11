const Controller = ({handleSetCount}) => {
    return (
        <div>
            <button type="button" onClick={() => handleSetCount(-1)}>-1</button>
            <button type="button" onClick={() => handleSetCount(-10)}>-10</button>
            <button type="button" onClick={() => handleSetCount(-100)}>-100</button>
            <button type="button" onClick={() => handleSetCount(+1)}>+1</button>
            <button type="button" onClick={() => handleSetCount(+10)}>+10</button>
            <button type="button" onClick={() => handleSetCount(+100)}>+100</button>
        </div>
    );
};

export default Controller;