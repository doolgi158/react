import axios from "axios";

// 서버 주소
export const API_SERVER_HOST = "http://localhost:8080";

// 기본 매핑
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async(tno) => {
    // HTTP GET 요청을 보내고 응답을 기다림
    const response = await axios.get(`${prefix}/${tno}`);
    // 성공적으로 응답을 받으면 데이터를 반환
    return response.data;
};

export const getList = async(pageParm) => {
    const {page, size} = pageParm;
    const response = await axios.get(
        `${prefix}/list`,
        {params: {page:page, size:size}}
    );
    return response.data;
}