import { createContext, useEffect, useState } from 'react'
import './App.css';
import styles from './styles/App.module.css';
import { Link, Route, Routes, useNavigate } from 'react-router'
import Home from './components/Home';
import Event from './components/Event';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
export const context = createContext();
function App() {
  const [arr, setArr] = useState([]);
  const [flag, setFlag] = useState(false);
  const handleHam = () =>{
    setFlag(!flag);
  }
  const handleIcon = (icon)=>{
    if(icon == 'instagram'){
      window.open('https://www.instagram.com/persistventures/', '_blank');
    } else if('linkedin'){
      window.open('https://www.linkedin.com/company/persist-ventures/', '_blank');
    }else if('youtube'){
      window.open('https://www.youtube.com/@persistventures', '_blank');
    }
  }
  return (
    <>
    <context.Provider value={{arr : arr, setArr : setArr}}>
    <header>

    <nav>
      <img className={'imgcls'} src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png" alt="" />
      <GiHamburgerMenu className={'ham'} onClick={handleHam} />
      <Link className={`temp`} to={'/'}>Home</Link>
      <Link className={`temp`} to={'/event'}>Events</Link>
    </nav>
    <section className={` ${flag === false  ? 'falseFlag' : 'sec'}`}>
      <Link className={`link2 ${flag == false ? 'falseFlag ' : 'item1'}`} to={'/'}>Home</Link>
      <Link className={`link2 ${flag == false ? 'falseFlag ' : 'item2'}`} to={'/event'}>Events</Link>
    </section>
    </header>
    <footer className='foot'> 
      <FaInstagram className='icon' onClick={() => handleIcon('instagram')} /> 
      <CiLinkedin className='icon' onClick={() => handleIcon('linkedin')} />
      <CiYoutube className='icon' onClick={() => handleIcon('youtube')} />
    </footer>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/event' element={<Event />} />
    </Routes>
    </context.Provider>
    </>
  )
}

export default App
