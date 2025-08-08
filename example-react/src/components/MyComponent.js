const MyComponent = (props) => {
    const style = {
         margin: 5
    }
    const spanstyle = {
        color: '#0f8100ff'
    }
    const namestyle = {
        margin: 5,
        color: '#0f8100ff',
        fontWeight: 'bold'
    }
    return ( 
        <div>
            <ul style={{
                backgroundColor: '#e3f0ffff',
                listStyle: 'none',
                }}>
                <li style={namestyle}>이름 : {props.name}</li>
                <li style={style}><span style={spanstyle}>나이 : </span>{props.age}</li>
                <li style={style}><span style={spanstyle}>소속팀 : </span>{props.email}</li>
                <li style={style}><span style={spanstyle}>포지션 : </span>{props.favoritNumber}</li>
                <li style={style}><span style={spanstyle}>수상 : </span>{props.favoritString}</li>
                <li style={style}><span style={spanstyle}>취미 : </span>{props.hobby[0]}, {props.hobby[1]}</li>
            </ul>
        </div>
    );
};

export default MyComponent;