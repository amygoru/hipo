import React, { useState } from 'react'
import './Promotion.css'
import { MDBDataTable } from 'mdbreact';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Promotion_content = () => {

  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'ID',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Phone',
        field: 'Phone',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Water_reward',
        field: 'Water_reward',
        sort: 'asc',
        width: 200
      },
      {
        label: 'First_reward',
        field: 'First_reward',
        sort: 'asc',
        width: 100
      }

    ],
    rows: [
      {
        ID: '705',
        Phone: '7087376726',
        Water_reward: 'Edinburgh',
        First_reward: '61',
      },
      {
        ID: '705',
        Phone: '7087376726',
        Water_reward: 'Edinburgh',
        First_reward: '61',
      }
      ,
      {
        ID: '705',
        Phone: '7087376726',
        Water_reward: 'Edinburgh',
        First_reward: '61',
      },
      {
        ID: '705',
        Phone: '7087376726',
        Water_reward: 'Edinburgh',
        First_reward: '61',
      }
    ]
  };

  return (
    <>
      <div class="container">
        <div class="headline"> Bonus:₹ <span >9253.71</span></div>
      </div>

      <div class="level_box">
        <div class="level_content">
          <div class="level_list">
            <ul class="layout"><li>
              <ol> Total People </ol>
              <ol class="two_ol">456</ol>
            </li><li><ol> Contribution </ol>
                <ol class="two_ol"> ₹ 236584.2</ol>
              </li></ul><div class="layout_bot">
              <div class="bot_list">
                <p class="titles">My Promotion Code</p>
                <p id="code" class="answer">775294181</p>
              </div><div class="bot_list">
                <p class="titles">My Promotion Link</p>
                <p class="answer heights" id="link"> https://domain.com//#/register?r_code=775294181</p>
              </div>
            </div>
            <div class="openlink">
              <button class="tag-read ripplegrey"> Copy Link </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tabs
          defaultActiveKey="profile"
          // id="fill-tab-example"
          className="mb-4 tab_cus_is"
          fill
        >
          <Tab eventKey="home" title=" Level 1 ">
            <div className='table_cus_5d'>
              <MDBDataTable
                striped
                bordered
                small
                data={data}
              />
            </div>
          </Tab>
          <Tab eventKey="profile" title=" Level 2 ">
            <div className='table_cus_5d'>
              <MDBDataTable
                striped
                bordered
                small
                data={data}
              />
            </div>

          </Tab>
          <Tab eventKey="longer-tab" title=" Level 3 ">
            <div className='table_cus_5d'>
              <MDBDataTable
                striped
                bordered
                small
                data={data}
              />
            </div>

          </Tab>
          <Tab eventKey="contact" title=" Level 4 " >
            <div className='table_cus_5d'>
              <MDBDataTable
                striped
                bordered
                small
                data={data}
              />
            </div>

          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default Promotion_content