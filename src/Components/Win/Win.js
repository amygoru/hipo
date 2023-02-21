import React, { useState } from 'react'
import './Win.css'
import Winnavbar from './Winnavbar'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { GiTargetPrize } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Tablerecord from './Tablerecord'
import MyRecord from './MyRecord';

const Win = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Winnavbar />
      {/* tabs */}
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="home" title=" Parity ">
          <p>xxxxxxxx</p>
        </Tab>
        <Tab eventKey="profile" title=" Sapre ">
          <p>xxxxxxxx</p>

        </Tab>
        <Tab eventKey="longer-tab" title=" Bcone ">
          <p>xxxxxxxx</p>

        </Tab>
        <Tab eventKey="contact" title=" Emred " >
          <p>xxxxxxxx</p>

        </Tab>
      </Tabs>
      {/* end */}

      <div className='main_buy_sell'>
        <div className='main_left_Period'>
          <p className='Period'><span className='Period_icon'><GiTargetPrize /></span><span className='Period_content'>Period</span></p>
          <p className='id_value'>20230135095</p>
        </div>
        <div className='main_right_count_down'>
          <p className='Count_Down_content'>Count Down</p>
          <p className='Count_Down'>
            <span >1</span>
            <span >1</span>

            <span className='num'>:</span>

            <span>1</span>
            <span >1</span>

          </p>
        </div>
      </div>
      <div className='join_btns'>
        <button onClick={handleShow} className='join_green'> Join Green </button>
        <button className=' Join_Violet '>  Join Violet  </button>
        <button className='join_red'> Join Red </button>

      </div>

      <div className='input_value'>
        <div className='first_row'>

          <button className='enter_value'>0</button>
          <button className='enter_value'>1</button>
          <button className='enter_value'>2</button>
          <button className='enter_value'>3</button>
          <button className='enter_value'>4</button>

        </div>
        <div className='secound_row'>
          <button className='enter_value'>5</button>
          <button className='enter_value'>6</button>
          <button className='enter_value'>7</button>
          <button className='enter_value'>8</button>
          <button className='enter_value'>9</button>
        </div>

      </div>
      <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header className='green_header' closeButton>
          <Modal.Title >Join Green</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='title_dash'>Contract Money</p>
          <p className='title_dash'>Total contract money is 10</p>
          <span className='wrap_checkbox'>  <Form.Check aria-label="option 1" /><span class="checkbox_cus">I agree <span onClick={() => setModalShow(true)} class="rule">PRESALE RULE</span></span></span>
        </Modal.Body>
        <Modal.Footer>
          <Button closeButton onClick={handleClose} style={{ color: '#00897b', marginRight: "10px", fontSize: "" }}>
            CANCEL
          </Button>
          <Button className='signin' style={{ color: '#00897b' }}>
            SIGN IN
          </Button>
        </Modal.Footer>
      </Modal>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Tablerecord />
      <MyRecord/>
    </>
  )
}

export default Win