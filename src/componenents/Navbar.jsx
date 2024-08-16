import React from 'react'
import mi_logo from '../media files/mi_logo.png'
import { IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
function Navbar() {
  return (
    <>
    <div className='navbar_container h-["10vh"] w-full text-white bg-zinc-900 flex  flex-row justify-center content-center items-center gap-52 px-7 font-extrabold py-5 fixed'>
      <div className='navbar_leftside w-[60%] border-pink-30 gap-1 flex flex-row justify-between items-center'>
      <button >
        <img src={mi_logo} style={{width:"40px", height:"40px",borderRadius:"15px"}} alt="mi_logo" />
        
      </button>
      <button className='heybutton'>Stores</button>
      <button className='heybutton'>Phones</button>
      <button className='heybutton'>Tablets</button>
      <button className='heybutton'>TV & Smart Homes</button>
      <button className='heybutton'>Smart Watch & Audio</button>
      </div>
      <div className='navbar_rightside w-[40%] border-pink-30 gap-1 flex flex-row justify-between items-center'>
      <button className='heybutton'>Discover</button>
      <button className='heybutton'>Support</button>
      <button><IoSearchSharp style={{width:"50px", height:"30px"}}/></button>
      <button><IoCartOutline style={{width:"50px", height:"30px"}} /></button>
      <button ><MdOutlineAccountCircle style={{width:"50px", height:"30px"}} /></button>
      </div>
    </div>
    
    </>
  )
}

export default Navbar