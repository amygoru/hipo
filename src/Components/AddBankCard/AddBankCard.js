import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import './AddBankCard.css'
const AddBankCard = () => {
    return (
        <>
            <div className='nav_login'>
                <div className='sections_login'>
                    <div> <span className='nav_icon'><BsArrowLeft /></span><span className='nav_path'>Add Bank Card</span></div>
                    {/* <div className='d_d'> <span onClick={handleShow} ><AiOutlineQuestionCircle /></span></div> */}
                </div>
            </div>

            {/* form */}

            <div className="input_card">
                <ul className="card_ul">
                    <li><p>Actual Name</p>
                        <input type="text" />
                    </li><li>
                        <p>IFSC Code</p>
                        <input type="text" />
                    </li><li><p>Bank Name</p>
                        <input type="text" /></li><li>
                        <p>Upi Id</p><input type="text" />
                    </li><li><p>Bank Account</p>
                        <input type="text" /></li>
                    <li><p>State/Territory</p>
                        <input type="text" /></li>
                    <li><p>City</p>
                        <input type="text" />
                    </li><li><p>Address</p>
                        <input type="text" /></li>
                    <li><p>Mobile Number</p>
                        <input type="text" /></li><li>
                        <p>Email</p><input type="text" /></li>
                    <li><p>Account phone number</p>
                        <input type="text" disabled="" />
                    </li><li><p>Code</p>
                        <div style={{ display: "flex" }}>
                            <input type="text" placeholder="Verification Code" style={{ flex: "1 1 0%" }} />
                            <span className="tips_span">Verification Code is required</span>
                            <button id="otpbtn" className="gocode"> OTP </button>
                        </div></li></ul><div className="continue_btn">
                    <button className="ripple">Continue</button>
                </div></div>
        </>
    )
}

export default AddBankCard