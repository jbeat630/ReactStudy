import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';

const Footer = () => {
      // 부모요소에서 유즈컨텍스트로넘긴 데이터를 컴포넌트에서사용하려면 아래처럼 불러와야됨
    const {isDark , setIsDark} = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    }
  return (
    <footer
        className='footer'
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray'
        }}
    >
        <button className='button' onClick={toggleTheme}>Theme Change Mode</button>
    </footer>
  )
}

export default Footer;