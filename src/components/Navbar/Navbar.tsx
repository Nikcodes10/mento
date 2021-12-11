import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import downArrow from '../../assets/down_arrow.svg';

export default function Navbar(props :any) {
    const [open, setOpen] = useState(false);
    const popdown = useRef<any>();
    useEffect(()=>{
        if(open)
            popdown.current.style.display='block';
        else 
            popdown.current.style.display='none';
    },[open])

    const listener = () => {
        if(!window.matchMedia('(max-width:700px)').matches) {
            setOpen(true)
        } 
        else {
            setOpen(false)
        }
    }

    useEffect(()=>{
        listener();
        window.addEventListener('resize', listener);
        return (()=>{
            window.removeEventListener('resize', listener);
        })
    },[])


    const handleClick = () => {
        setOpen(prev=>!prev)
    }
    return(
    <div className='navbar__encloser'>
        <main className='navbar__main'>
            <div>
                <span>
                    <img src={logo} alt="logo"/>
                </span>
                <h3>Mento Inc</h3>
            </div>
            <ul ref={popdown}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Products</Link>
                    <img className='navbar__arrow' src={downArrow} alt="arrow"/>
                </li>
                <li>
                    <Link to="/">Resources</Link>
                    <img className='navbar__arrow' src={downArrow} alt="arrow"/>
                </li>
                <li>
                    <Link to="/">Pricing</Link>
                </li>
            </ul>
            <span className='navbar__hamburger' onClick={handleClick}>
               <span></span>
               <span></span>
               <span></span>
            </span>
        </main>
    </div>
    )
}