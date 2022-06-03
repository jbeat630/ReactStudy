import React from 'react'
function UserGreeting(props){
  // 1번째 방법 0은 flasy 거짓같은값이기때문에 0이란값을 뱉어서 불리언으로 감싸써 false로 받게해야된다
  // {Boolean(props.count) && `It's ${props.count} times`}
  // 2번째방법은 삼항연산자를써써 null값을 넣어서 아무것도아닌걸뱉어라
  return <h1>{props.name && `${props.name},`} Welcome { props.count ? `It's ${props.count} times` : null} </h1>
}
function GuestGreeting(){
  return <h1>Please sign up.</h1>
}
function Greeting(props) {
  // if(props.isLoggedIn) {
  //   return <UserGreeting name="jimmy" count={0}/>
  // }
  // return <GuestGreeting />
  return props.isLoggedIn ? <UserGreeting name="jimmy" count={0}/> : <GuestGreeting />;
}
export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
        <Greeting isLoggedIn={isLoggedIn}/>
    </div>
  )
}
