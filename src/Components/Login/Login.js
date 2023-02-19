import React from 'react'
import Navlogin from './Navlogin'
import { BsPhone } from "react-icons/bs";
import { BsFillKeyFill } from "react-icons/bs";
import './Login.css';
const Login = () => {
    return (
        <>
            <div>
                <Navlogin />
                <form className='padd_cus'>
                    <div className='fild_input'>
                        <span style={{ marginRight: "10px" }}><BsPhone /></span>
                        <input id="username" type="number" placeholder="Mobile Number" style={{ outline: 'none;', border: "none" }} />
                    </div>
                    <div className='fild_input'>
                        <span style={{ marginRight: "10px" }}><BsFillKeyFill /></span>
                        <input id="username" type="password" placeholder="Password" style={{ outline: 'none;', border: "none" }} />
                    </div>
                    <div class="input_box_btn">
                        <button class="login_btn ripple">Login</button>
                    </div>
                    <div class="input_box_btn">
                        <div class="two_btn">
                            <button class="ripplegrey">Register</button>
                            <button class="ripplegrey">Forgot Password?</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login