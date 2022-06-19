import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

const Header = () => {
  // 부모요소에서 유즈컨텍스트로넘긴 데이터를 컴포넌트에서사용하려면 아래처럼 불러와야됨
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  
  console.log(isDark);
  console.log(user);
  return (
    <header
    className='header'
    style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
    }}
    >
        <h1>Welcome {user}! </h1>
    </header>
  )
}

export default Header;