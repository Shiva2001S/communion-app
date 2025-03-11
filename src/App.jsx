import { createContext, useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router'
import Home from './components/Home';
import Event from './components/Event';
export const context = createContext();
function App() {
  const [arr, setArr] = useState([]);
 
  return (
    <>
    <context.Provider value={{arr : arr, setArr : setArr}}>
    <nav>
      <img src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png" alt="" />
      <Link to={'/'}>Home</Link>
      <Link to={'/event'}>Events</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/event' element={<Event />} />
    </Routes>
    </context.Provider>
    </>
  )
}

export default App
