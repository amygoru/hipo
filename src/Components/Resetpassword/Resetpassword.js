import React from 'react'
import { AiFillAccountBook } from 'react-icons/ai'
import { BsArrowLeft, BsFillKeyFill, BsPhone } from 'react-icons/bs'
import { SiGooglemessages } from 'react-icons/si'
import '../Register/Register.css'
const Resetpassword = () => {
    return (
        <>
            {/* nav */}
            <div className='nav_login'>
                <div className='sections_login'>
                    <span className='nav_icon'><BsArrowLeft /></span><span className='nav_path'>Reset Password</span>
                </div>
            </div>
            {/* end */}
            <form className='padd_cus'>
                <div className='fild_input'>
                    <span style={{ marginRight: "10px" }}><BsPhone /></span>
                    <input id="username" type="number" placeholder="Mobile Number" style={{ outline: 'none;', border: "none" }} />
                </div>
                <div className='d-flex'>
                    <div className='fild_input_1'>
                        <div class="special_box">
                            <span style={{ marginRight: "10px" }}><SiGooglemessages /></span>
                            <input id="username" type="number" placeholder="Verification Code" style={{ outline: 'none;', border: "none", width: "100%" }} />
                        </div>

                    </div>
                    <div className='get_otp'> <button style={{ width: "100%" }} className='w-100'>get otp</button></div>
                </div>

                <div className='fild_input'>
                    <span style={{ marginRight: "10px" }}><BsFillKeyFill /></span>
                    <input id="username" type="password" placeholder="Password" style={{ outline: 'none;', border: "none" }} />
                </div>

                <div class="input_box_btn">
                    <button class="login_btn ripple">Continue</button>
                </div>
            </form>
        </>
    )
}

export default Resetpassword