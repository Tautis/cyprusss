import { useState } from 'react'
import '../navbar/navbar.css'
import logo from '../../../assets/mainlogo.svg'
function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className='container'>
      <div className='navbar'style={click ? {height: '250px'} : {}}>
        <div className='flex-items'>
            <a className='nav-logo' href='/'><img src={logo}/></a>
        </div>
        <div className='flex-items'>
            <ul className={click ? "opened" : "closed"}>
                <li> <a href='/'>HOME</a></li>
                <li> <a href='/about'>ABOUT US</a></li>
                <li> <a href='/'>OUR APARTAMENTS</a></li>
                <li> <a href='/'>BLOG</a></li>
                <li> <a href='/'>CONTACT US</a></li>
            </ul>
            <div className={click ? 'nav-icon1 open' : 'nav-icon1'}onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar
