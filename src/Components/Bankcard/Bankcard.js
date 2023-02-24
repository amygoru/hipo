import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { GrAdd } from "react-icons/gr";
const Bankcard = () => {
  return (
    <>
       <div className='nav_login'>
                <div className='sections_login'>
                    <div> <span className='nav_icon'><BsArrowLeft /></span><span className='nav_path'>Bank Card</span></div>
                    <div className='d_d'> <span ><GrAdd /></span></div>
                </div>
            </div>
    </>
  )
}

export default Bankcard