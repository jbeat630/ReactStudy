import React, { useState , useReducer } from 'react'

// 이건유튜브보고했음 설명이 자세했음 유튭보고 짤막하게 맛보기하고
// 강의영상보면서 디테일하게 공부하자

// reducer - state를 업데이트 하는 역할
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw',
}

// 리듀서함수
// 처음인자는 현재상태, 두번째인자는 액션
const reducer = (state, action) => {
  console.log(state, action)


  switch( action.type ) {
    case ACTION_TYPES.deposit :
      return state + action.payload;
    case ACTION_TYPES.withdraw :
      return state - action.payload
      default :
      return state;
  }

}
export default function Reducer() {
    const [number, setNumber] = useState(0);
    // (리듀서 ,초기값)
    // 첫뻔재 인자는 reducer로만 수정가능함
    // dispatch를 사용하면 reducer 함수가 실행됨
    const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
        <h2>useReducer</h2>
        <p>잔고 : {money}원</p>
        <input 
            type="number"
            value={number}
            onChange={ (e)=> {
                setNumber(parseInt(e.target.value))
            }}
            step="1000"
        />
        {/* // dispatch 사용하면 reducer 함수실행됨
        // dispatch인자로 액션을 전달해야됨 
        // 액션은 보통의경우 오브젝트형태로보냄 */}
        <button onClick={ () => {
          dispatch( { type: ACTION_TYPES.deposit, payload: number } )
        }}
        >예금</button>
        <button
          onClick={ ()=>{
            dispatch( { type:ACTION_TYPES.withdraw, payload: number })
          }}
        >출금</button>
    </div>
  );
};
