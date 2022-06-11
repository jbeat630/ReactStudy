import React, { useState, useEffect } from 'react'

export default function Effect() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };
    
    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    // dependency array가 없으면 랜더링될때마다 실행됨
    // dependency array가 비어있으면 처음한번만 실행
    // dependency array에 업데이트감지하고싶은얘를 넣으면 걔가 업데이트될때만 실행 (맨처음도실행됨)
    // 유즈이펙트는 콜백으로 되어있음

    useEffect(() => {
        console.log('랜더링될때 무족건 실행')
    });
    useEffect(() => {
        console.log('처음한번만 마운트될대 실행')
    }, []);
    useEffect(() => {
        console.log('카운트가 업데이트될때 실행')
    },[count]);

    
    return (
        <div className='useEffectControl'>
            <button onClick={handleCountUpdate}>Update</button>
            <br />
            <span>count: {count}</span>
            <br />
            <input type="text" value={name} onChange={handleInputChange}/>
            <br />
            <span>name: {name}</span>
        </div>
    )
}
