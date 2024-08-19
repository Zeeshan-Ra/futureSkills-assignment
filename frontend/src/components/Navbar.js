import React from 'react'
import { CgArrowsExpandUpRight } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between h-14 items-center'>
      <div className='flex text-white gap-2 relative left-24'>
        <div className='bg-white rounded-lg p-1'><CgArrowsExpandUpRight className='text-black text-lg' /></div>
        <h4 className='font-semibold text-lg'>Abstract</h4>
        <span>|</span>
        <h5>Help Center</h5>
      </div>
      <button className='border-[1px] text-slate-200 rounded bg-zinc-900 font-medium py-1 px-3 relative right-44 hover:scale-110 transition-all ease-in-out'>Submit a request</button>
    </div>
  )
}

export default Navbar
