import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const {kakao} = window;

const mapViewer = (mapLat, mapLot) => {
    if(mapLat === "0" && mapLot === "0") {
        alert("지도에 표시할 수가 없습니다.");
        return;
    }
    const mapContainer = document.getElementById('map'),    // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(mapLat, mapLot),  // 지도의 중심좌표
            level: 3    // 지도의 확대 레벨
        };
    
    // 지도를 표시할 div와 지도 옵션으로 지도를 생성한다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커를 생성한다
    const marker = new kakao.maps.Marker({
        position: map.getCenter()
    });

    // 마커가 지도 위에 표시되도록 설정한다
    marker.setMap(map);
};

const GyeongnamTourcultureItem = ({data_title, category_name1, category_name2, telno, user_address, data_content, fileurl1, fileurl2, fileurl3, lattitude, logitude}) => {
    return (
        <Card className="mb-3">
            <Card.Header as="h5">{data_title}</Card.Header>
            <Card.Body>
                <Card.Text className='text-end'>
                    <span className='font-size'>{category_name1}{">"}{category_name2}</span>
                </Card.Text>
                <Card.Text>
                    {telno !== '' && `☎${telno}`}<br />
                    {`🏢${user_address}`}
                </Card.Text>
                <Card.Text>
                    {data_content}
                </Card.Text>
                <Card.Text>
                    {fileurl1 !== "" && <Image alt={category_name1} src={fileurl1} thumbnail className = 'fileurl' />}
                    {fileurl2 !== "" && <Image alt={category_name1} src={fileurl2} thumbnail className = 'fileurl' />}
                    {fileurl3 !== "" && <Image alt={category_name1} src={fileurl3} thumbnail className = 'fileurl' />}
                </Card.Text>
                <Button
                    variant="primary"
                    onClick={() => mapViewer(lattitude, logitude)}
                >
                    지도로 보기
                </Button>
            </Card.Body>
        </Card>
    );
};

export default GyeongnamTourcultureItem;