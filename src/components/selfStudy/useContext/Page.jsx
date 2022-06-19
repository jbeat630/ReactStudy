import { useState } from 'react';
import './index.css';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Page = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        // 씸콘텍스트프로바이더 밸류값으로 넒길 데이터를 전달 해줄수있음
        // 이러면 프롭스를 사용하지않고도 모든하위컨포넌트에서 사용할수있음
        <UserContext.Provider value={"사용자"}>
            <ThemeContext.Provider value={ {isDark, setIsDark }}>
                <div className='page'>
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}
export default Page;
