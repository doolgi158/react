import './Header.css';

const Header = () => {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',   //long
        day: 'numeric',
        weekday: 'short',   //long
    };
    const formattedDate = date.toLocaleDateString('ko-KR', options);
    
    return(
        <div className="Header">
            <h3>오늘은📅</h3>
            <h1>{formattedDate}</h1>
        </div>
    )
}

export default Header;