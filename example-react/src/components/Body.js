import{useState} from "react";

const Body = () => {
    const[name, setName] = useState("");
    const[gender, setGender] = useState("");
    const[birth, setBirth] = useState("");
    const[bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeGender = (e) => {
        setGender(e.target.value);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };

    const onChangeBio = (e) => {
        setBio(e.target.value);
        
        if(e.key === "Enter"){
            const biotext = document.getElementById("bioid").value;
            setBio("");
        }
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} placeholder="이름" />
            </div>
            
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>

            <div>
                <input type="date" value={birth} onChange={onChangeBirth} />
            </div>

            <div>
                <textarea value={bio} onKeyDown={onChangeBio} id="bioid" placeholder="메모"/>
            </div>

            <h4>데이터 출력</h4>
            <div>
                <label>이름 : </label>{name}<br />
                <label>성별 : </label>{gender}<br />
                <label>생년월일 : </label>{birth}<br />
                <label></label>{bio}<bir />
            </div>
        </div>
    );
};

export default Body;