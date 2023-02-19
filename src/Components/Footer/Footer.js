import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiTargetPrize } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Footer = () => {
    return (
        <>

            <div data-v-405e9a63="" data-v-68d7bcd4="" className="footer">
                <ul data-v-405e9a63="" className="nav_foot">
                    <li
                        data-v-405e9a63=""
                    >
                        <a style={{ color: '#009688' }} href="/">
                            <div className='flex_cus'>
                                <AiFillHome />
                                {/* <span data-v-405e9a63="">Home</span> */}
                            </div>
                        </a>
                    </li>
                    <li
                        data-v-405e9a63="">
                        <a style={{ color: '#009688' }} href="/">
                            <div className='flex_cus'>
                                <FaSearch />
                            </div>
                        </a>
                    </li>
                    <li
                        data-v-405e9a63=""
                    >
                        <a style={{ color: '#009688' }} href="/win">
                            <div className='flex_cus'>
                                <GiTargetPrize />
                            </div>
                        </a>

                    </li>
                    <li
                        data-v-405e9a63=""
                    >
                        <a style={{ color: '#009688' }} href="/login">
                            <div className='flex_cus'>
                                <FaUserAlt />
                            </div>
                        </a>

                    </li>

                </ul>
            </div>

        </>
    )
}

export default Footer
