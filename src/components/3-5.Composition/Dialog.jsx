import React from 'react'
// 프롭스로자식요소도받아옴
export default function Dialog(props) {
  return (
    <div 
        className='dialog'
        style={{
            backgroundColor:'pink',
        }}
    >
        {props.children}
    </div>
  )
}
