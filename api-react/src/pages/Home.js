import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
/*import BusantravelList from '../Component/BusantravelList';
import Header from '../Component/Header';*/
import BoardList from '../board/BoardList';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    {/*}<Header />{*/}
                    <h2 className='text-center'>게시판 리스트</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/*}<h2 className = 'text-center'>부산 테마여행 리스트</h2>{*/}
                    <BoardList />
                </Col>
            </Row>
            <Row>
                <Col>
                    {/*}<BusantravelList />{*/}
                </Col>
            </Row>
        </Container>
    )
};

export default Home;