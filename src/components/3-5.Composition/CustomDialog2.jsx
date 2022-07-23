import React from 'react'
import Dialog from './Dialog'

export default function CustomDialog(props) {
  return (
    // <div>
    //     <h1>{props.title}</h1>
    //     <h5>{props.description}</h5>
    // </div>
    <Dialog>
        <div style={{marginTop:'10px'}}>

        <strong>이친구는 커스텀2입니다</strong>
        <h1>{props.title} 이것은 타이틀</h1>
        <h5>{props.description}이것은 디스크립션</h5>
        </div>
    </Dialog>
  )
}
