import { createContext, useEffect, useState } from 'react'
import './App.css';
import styles from './styles/App.module.css';
import { Link, Route, Routes } from 'react-router'
import Home from './components/Home';
import Event from './components/Event';
import { GiHamburgerMenu } from "react-icons/gi";
export const context = createContext();
function App() {
  const [arr, setArr] = useState([]);
  const [flag, setFlag] = useState(false);
  // useEffect(()=>{
  //   if(window.screen.width > 450){
  //     setFlag(false);
  //   }
  // }, [])
  const handleHam = () =>{
    setFlag(!flag);
  }
  return (
    <>
    <context.Provider value={{arr : arr, setArr : setArr}}>
    <nav>
      <img className={'imgcls'} src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png" alt="" />
      <GiHamburgerMenu className={'ham'} onClick={handleHam} />
      <Link className={`${window.screen.width < 450 ? 'falseFlag ' : ''}`} to={'/'}>Home</Link>
      <Link className={`${window.screen.width < 450 ? 'falseFlag ' : ''}`} to={'/event'}>Events</Link>
    </nav>
    <section className={`sec ${flag === false  ? 'falseFlag' : ''}`}>
      <Link className={`link2 ${flag == false ? 'falseFlag ' : 'item1'}`} to={'/'}>Home</Link>
      <Link className={`link2 ${flag == false ? 'falseFlag ' : 'item2'}`} to={'/event'}>Events</Link>
    </section>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/event' element={<Event />} />
    </Routes>
    </context.Provider>
    </>
  )
}

export default App
