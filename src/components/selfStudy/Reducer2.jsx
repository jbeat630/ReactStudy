import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {

    switch( action.type ){
        case 'add-student':
            const name= action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false, 
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };

        case 'delete-student':
            return {
                count: state.count -1,
                // 스튜던츠어레이를 돌면서 스튜던트아이디가 페이로드아이디와 같지않은것만 꺼내준다 -> 같은놈을 빼고니깐 같은놈만 지우고 나머지만살아남는다
                students: state.students.filter(
                    (student) => student.id !== action.payload.id)
            }

         case 'mark-student':
            return {
                count: state.count,
                students: state.students.map( student => {
                    if(student.id === action.payload.id) {
                        // 나머지는 그대로 바뀔것만 따로 지정
                        return {...student, isHere: !student.isHere}
                    }
                    return student;
                })
            }   
        default:
            return state;
    }

};

// 학생컴포넌트 밖에다안만들구 걍여기다만듬
// 프롭으로 이름, 디스패치, 아이디 받음
const Student  = ( {name, dispatch, id, isHere} ) => {
    return (
        <div>
            <span
                style={{
                    textDecoration : isHere ? "line-through" : "none",
                    color : isHere ? "gray" : "black",
                }}
                onClick={ ()=>{
                    dispatch({type: 'mark-student', payload: {id} })
                }}
            >{name}</span>
            <button 
                onClick={ ()=>{
                    dispatch({type: 'delete-student', payload: {id} })
                }}
            >삭제</button>
        </div>
    )
}


// 스튜던트인포 초기스테이트 오브젝트형태
const initialState = {
    count: 0,
    // 학생정보도 오브젝트형태로
    students: [
        // {
        //     id: Date.now(),
        //     name : '테스트',
        //     isHere: false,
        // } 
    ],
}

export default function Reducer2() {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>reducer출석부</h1>
        <p>총 학생 수 : {studentsInfo.count}</p>
        <input 
            type="text"
            placeholder='이름을 입력해주세요'
            value={name}
            onChange={ (e) => {setName(e.target.value)} } 
        />
        {/* 디스패치로 리듀서에 스테이트넘기기 네임은 바로위 인풋에서 name 스테이트씀*/}
        <button onClick={()=>{dispatch({ type: 'add-student', payload:{name} })}}>추가</button>
        {/* 
            위에만든 학생컴포넌트불러오기 맵써서 학생각각의 컴포넌트로 보여주기
            studentsInfo 스테이트안에 'students배열을'을 맵을돌려 {}하고주석으로되어있는게 묶음으로 배열되는거임
            학생별로 Student컴포넌트로만듬 이때 프롭으로 이름넘김 map에 key값이필요하니 스튜던트 아이디값을 키값으로넘김 
            아래 맵쓸때 배열에 모든것에 function 을 실행하는거 그리고 function줄때 student라고 해서줫는데 이건 변수라 아무거나가능 
        */}

        {studentsInfo.students.map( student => {
            return (
                <Student 
                    key={student.id}  
                    name={student.name} 
                    dispatch={dispatch} 
                    id={student.id} 
                    isHere={student.isHere}
                />
            )
        })}

    </div>
  )
}
