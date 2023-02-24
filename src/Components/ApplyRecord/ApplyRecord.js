import { MDBDataTable } from 'mdbreact';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const ApplyRecord = () => {

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
             <div className='nav_login'>
                <div className='sections_login'>
                    <div> <span className='nav_icon'><BsArrowLeft /></span><span className='nav_path'>Apply Record</span></div>
                    {/* <div className='d_d'> <span onClick={handleShow} ><AiOutlineQuestionCircle /></span></div> */}
                </div>
            </div>

            <div style={{padding:"20px"}} className='table_f_54'>
            <MDBDataTable
                striped
                bordered
                small
                data={data}
              />
            </div>
 </>
  )
}

export default ApplyRecord