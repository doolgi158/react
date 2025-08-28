import { useContext } from "react";
import './GyeongnamTourcultureList.css';
import GyeongnamTourcultureItem from './GyeongnamTourcultureItem';
import { stateContext } from "../App";

const GyeongnamTourcultureList = () => {
    const rows = useContext(stateContext);
    
    return (
        <>
            <div id="map" className='map_area'></div>
            {
                rows.map((item, index) => (
                    <GyeongnamTourcultureItem key={index} {...item} />
                ))
            }
        </>
    );
};

export default GyeongnamTourcultureList;