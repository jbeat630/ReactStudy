import React, { useState } from 'react'

const heavyWork = () => {
    console.log('엄청 무거운 작업!!');
    return ["홍길동", "김민수"];
}

export default function State() {

    const  [time , setTime ] = useState(1);
    const handleClickUp = () => {
        let newTime;
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    }
    const handleClickDown = () => {
        let newTime;
        if (time >= 1) {
            newTime = 1;
        } else {
            newTime = time - 1;
        }
        setTime(newTime);
    }

    // 초기값을 가져올때 어떤 무거운작업을해야될때 바로 값을 넣어주는게아니라
    // 값을 리턴해주느 콜백함수를 써야된다
    const [names, setNames] = useState(()=> {
        
        return heavyWork();
    });
    const [input, setInput] = useState('');
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    const handleUpload = () => {
        // 콜백함수
        // 콜백에 이전스테이트가 들어있음
        // 리턴해줄값은 새로운 배열이되고 처음에는 input값이들어가고 뒤에값은 이전스테이트가들어있어야됨
        setNames((prevState) => {
            console.log(prevState);
            return([input, ...prevState]);
        })
    }


    return (
        <>
            <div className="buttonControl">
                <span>현재 시각 : {time}시</span>
                <button onClick={handleClickUp}>Up</button>
                <button onClick={handleClickDown}>Down</button>
            </div>
            <br />
            <div className="inputControl">
                <input type="text" value={input} onChange={handleInputChange}/>
                <button onClick={handleUpload}>Upload</button>
                {names.map((name, idx) => {
                    return <p key={idx}>{name}</p>
                })}
            </div>
        </>
    )
}
