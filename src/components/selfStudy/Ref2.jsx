import React, { useRef, useEffect } from 'react'

export const Ref2 = () => {
    const inputRef = useRef('');

    useEffect( () => {
        inputRef.current.focus();
    }, [])
    const login = () => {
        // ``백틱으로하는방식은 템플릿스트링
        alert(`환영합니다 ${inputRef.current.value}!`)
        inputRef.current.focus();
    }
  return (
    <div>
        {/* 인풋에 ref속성으로 만들어둔 useRef를 넣으면 인풋대한 모든정보가들어가있음  */}
        <input ref={inputRef} type="text" placeholder='username' />
        <button onClick={login}>로그인</button>
    </div>
  )
}
