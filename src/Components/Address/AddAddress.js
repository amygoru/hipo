import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
// import { GrAdd } from 'react-icons/gr'

const AddAddress = () => {
    return (
        <>
            <div className='nav_login'>
                <div className='sections_login'>
                    <div> <span className='nav_icon'><BsArrowLeft /></span><span className='nav_path'>Add Address</span></div>
                    {/* <div className='d_d'> <span ><GrAdd /></span></div> */}
                </div>
            </div>

            {/* address  form */}
            <div className="input_card">
                <ul className="card_ul">
                    <li><p>Full Name
                    </p>
                        <input type="text" />
                    </li><li>
                        <p>Mobile Number</p>
                        <input type="text" />
                    </li><li><p>Pincode</p>
                        <input type="text" /></li><li>
                        <p>State</p><input type="text" />
                    </li><li><p>Town/City</p>
                        <input type="text" /></li>
                    <li><p>Detail Address</p>
                        <input type="text" /></li>
                </ul><div className="continue_btn">
                    <button className="ripple">Continue</button>
                </div></div>
        </>
    )
}

export default AddAddress