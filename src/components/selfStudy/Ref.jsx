import React, {useState , useRef, useEffect } from 'react'
// useRef는 변화는 감지하지만 그변화가 렌더링을 발생시키면안될대 사용됨
export const Ref = () => {
    const [count , setCount] = useState(0);
    const renderCount = useRef(0);
useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링", renderCount.current )
    // setRenderCount( renderCount + 1);
})
// const [renderer , setRenderer] = useState(0);
// const countRef = useRef(0);
// let countVar = 0;
// // Ref는 하나의 오브젝트
// const doRendering = () => {
//     setRenderer( renderer + 1);
// }
// const increaseRef = () => {
//     countRef.current = countRef.current + 1;
//     console.log( "ref :", countRef.current )
// }
// const increaseVar = () => {
//     countVar = countVar + 1;
//     console.log( "var :", countVar )
// }
// const printResults = () => {
//     console.log(`ref: ${countRef.current}, var: ${countVar}` )
// }
return (
    <div>
        {/* <p>Ref : {countRef.current}</p>
        <p>Var : {countVar}</p>
        <button onClick={doRendering}>렌더!</button>
        <button onClick={increaseRef}>Ref 올려</button>
        <button onClick={increaseVar}>Var 올려</button>
        <button onClick={printResults}>Ref Var 값 출력</button> */}
        <p>Count : {count}</p>
        <button onClick={() => setCount( count + 1)}>올려</button>
    </div>
  )
}
