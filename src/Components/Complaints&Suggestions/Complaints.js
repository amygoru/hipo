import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import { GrAdd } from 'react-icons/gr'

const Complaints = () => {
  return (
    <>
    <div className='nav_login'>
                <div className='sections_order'>
                    <div> <span className='nav_icon'><BsArrowLeft /></span><span className='nav_path'>Orders</span></div>
                    <div className='d_d'> <span className='c_ic_5s' ><GrAdd style={{color:"#fff"}} /></span></div>

                </div>
            </div>
            <div>
                <Tabs
                    defaultActiveKey="profile"
                    // id="fill-tab-example"
                    className="mb-4 tab_cus_is"
                    fill
                >
                    <Tab eventKey="home" title=" COMPLETED ">
                        <p>xxxxALLxxxx</p>
                    </Tab>
                    <Tab eventKey="profile" title=" WAIT ">
                        <p>xxxUNDELIVERxxxxx</p>

                    </Tab>
                    
                </Tabs>
            </div>
    </>
  )
}

export default Complaints