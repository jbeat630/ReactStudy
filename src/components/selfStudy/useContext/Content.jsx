import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

const Content = () => {
    // 부모요소에서 유즈컨텍스트로넘긴 데이터를 컴포넌트에서사용하려면 아래처럼 불러와야됨
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div
    className='content'
    style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
    }}
    >
        <p>{user}님 좋은하루되세요.</p>
    </div>
  )
}

export default Content;