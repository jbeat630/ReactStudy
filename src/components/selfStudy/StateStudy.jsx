import React from 'react'
import { useState } from 'react';

export default function StateStudy() {
    const [inputText, setInputText] = useState('텍스트 보여주는곳');
    const [inputNum, setInputNum] = useState(0);

    const handleInput = (e) => {
        let thisValue = e.target.value;
        setInputText(thisValue);
    }
    const handlePlus = (e) => {
        let targetNum = document.querySelector('.calc_input').value;
        setInputNum(parseInt(targetNum) + inputNum);
    }
  return (
    <>
        <div className='study_1'>
            <input type="text" onChange={handleInput} className='input_event'/>
            <p>{inputText}</p>
        </div>
        <div className='study_2'>
            <input type="number" className='calc_input' />
            <button className='plus-calc' onClick={handlePlus}>더하기</button>
            <p>{inputNum}</p>
        </div>
    </>
  )
}
