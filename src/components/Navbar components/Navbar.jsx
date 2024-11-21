import React from 'react'
import Image from 'next/image'
import YoutubeImage from './YoutubeImage'
import { RxHamburgerMenu } from "react-icons/rx"
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className='flex gap-14'>
      
      <div className= 'flex items-center gap-6 ml-7'>
        <RxHamburgerMenu/>
        <YoutubeImage/>
      </div>

      <div>
        <SearchBar/>
      </div>
    </div>
  )
}

export default Navbar
