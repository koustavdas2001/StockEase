import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard.jsx'
import ThemeContext from './context/ThemeContext.jsx';
import StockContext from './context/StockContext.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("FB");
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode}}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol}}>
      <Dashboard/>
      </StockContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
