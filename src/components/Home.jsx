import React from 'react'
import './home.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='home-container'>
            <div className='home-text'>
                <h1>Save Your Memories</h1>
                <small>While</small>
                <small>Creating new ones</small>
            </div>
            <div className='home-events'>
                <h2>Gallery</h2>
                <Link to ="/Gallery1" className='gallerys'>Gallery-1</Link>
                <Link to="/Gallery2" className='gallerys'>Gallery-2</Link>
                <Link to ="/Gallery3" className='gallerys'>Gallery-3</Link>
            </div>
        </div>
    </div>
  )
}

export default Home