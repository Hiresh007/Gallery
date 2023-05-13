import React from 'react'
import {Link} from 'react-router-dom'
import {GoTriangleDown} from 'react-icons/go'
import {motion} from 'framer-motion'
import './navbar.css' 
import {AiOutlineInstagram , AiFillLinkedin , AiFillFacebook} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
const Navbar = () => {
  const [drop , setDrop] = React.useState(false)
  const dropMenu = ()=>{
    return (
     <motion.div className='menu'
        initial = {
          {y:32 , opacity:0 , transitionDelay:0 , transitionDuration:3}
        }
        animate = {{y:32 , opacity:1}}
     >
          <ul>
            <li>
             <Link to="/Gallery1" className='links'>Gallery-1</Link>
            </li>
            <li>

         <Link to="/Gallery2" className='links'>Gallery-2</Link>
            </li>
            <li>
        <Link to="/Gallery3" className='links'>Gallery-3</Link>

            </li>
          </ul>
     </motion.div>
    )
  }
  return (
    <div className='navbar'>
      {drop && dropMenu()}
        <div className='navbar-container'>
            <div className='nav-links'>
               <Link to ="/" style={{textDecoration:"none" , color:"white"}}><span>Home</span></Link>
               <button onClick={() => setDrop(prev => !prev)}>Gallery<GoTriangleDown className='drop-icon'/></button>
            </div>
            <div className='nav-icons'>
              <AiOutlineInstagram/>
              <BsFacebook/>
              <AiFillLinkedin/>
            </div>
        </div>
    </div>
  )
}

export default Navbar