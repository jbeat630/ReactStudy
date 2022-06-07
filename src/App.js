import { useState } from 'react'
import './App.css';
import './common/style.css';
import Page from './components/selfStudy/useContext/Page';
import { ThemeContext } from './components/selfStudy/useContext/context/ThemeContext';
import {UserContext } from './components/selfStudy/useContext/context/UserContext';
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={"사용자"}>
        <ThemeContext.Provider value={{isDark, setIsDark}}>
          <Page />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
