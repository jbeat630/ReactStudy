import React, { useState, useEffect } from 'react'

export default function Effect() {
    const [showTimer, setShowTimer] = useState(false);
    // 빈 dependency array 를줬기때문에 처음한번 렌더링됬을때 불림
    // 유즈이펙트에 리턴은 유즈이펙트가 언마운트될때 실행됨
    const Timer = () => {
        
        useEffect(() => {
            const timer = setInterval( () => {
                console.log('타이머 1초마다 도는중');
            }, 1000);

            return () => {
                clearInterval(timer);
                console.log('타이머 끝')
            };
        }, [] );

        return (
            <div>
                <span>타이머를 시작함 콘솔을보세요</span>
            </div>
        );

    };
    
    return (
        <div className='useEffectControl2'>
            {/* 쇼타이머가 트루일때 렌더링 */}
            {showTimer && <Timer />}
            {/* 클릭될때 boolean 값이 반전되게끔됨 */}
            <button onClick={ () => setShowTimer(!showTimer) }>Toggle Timer</button>
        </div>
    )
}
