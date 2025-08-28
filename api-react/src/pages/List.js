import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GyeongnamTourcultureList from "../Component/GyeongnamTourcultureList";
import Header from "../Component/Header";

const List = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='text-center'>경상남도 문화관광 리스트</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GyeongnamTourcultureList />
                </Col>
            </Row>
        </Container>
    )
};

export default List;