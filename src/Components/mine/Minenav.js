import { Badge } from 'react-bootstrap'
import { IoNotifications } from "react-icons/io5";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Minenav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='mine_nav'>
                <div className='nav_1'>
                    <div className='info_left'>
                        <span className='ml-3'><Badge className='9_cus' bg="secondary">9</Badge></span>
                        <span><div className='user_info'>
                            <ul>
                                <li>User:{ }</li>
                                <li>ID:{ }</li>
                            </ul>
                        </div></span>
                    </div>

                    <div class="info_right">
                        <div onClick={handleShow} class="notice">
                            <IoNotifications />
                        </div>
                    </div>
                </div>
                <div className='nav_2'>
                    <div class="mine_top_items">
                        <div class="top_item">
                            <div>₹ 652</div>
                            Balance
                            <button class="one_btn ripple"> Recharge </button>
                        </div>
                        <div class="top_item"><div>
                            ₹ 3900</div> Commission
                            <button class="one_btn ripple">See</button>
                        </div><div class="top_item"><div>₹ 2382</div>
                            Interest
                            <button class="one_btn ripple">See</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* model */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body>Notice not found !</Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default Minenav
