import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import Collapsible from "react-collapsible";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillFileTextFill } from "react-icons/bs";
const MyRecord = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p_records">
        <BsFillFileTextFill />
        <p>Parity Record</p>
      </div>
      <div className="toggle_cus">
        <div className="main_wrap_f">
          <Collapsible trigger="20230135105">
            <div className="myParity">
              <p className="myParity_title">Period Detail</p>
              <ul>
                <li>
                  <ol> Period </ol>
                  <ol>20230135105</ol>
                </li>
                <li>
                  <ol> Contract Money </ol>
                  <ol>10</ol>
                </li>
                <li>
                  <ol> Delivery </ol>
                  <ol>
                    <span className="orange">9.5</span>
                  </ol>
                </li>
                <li>
                  <ol> Fee </ol>
                  <ol>0.5</ol>
                </li>
                <li>
                  <ol> Open Price </ol>
                  <ol>46232</ol>
                </li>
                <li>
                  <ol> Result </ol>
                  <ol>
                    <span className="bluecolor">2&nbsp;</span>
                    <span style={{ color: "red" }}></span>
                  </ol>
                </li>
                <li>
                  <ol> Select </ol>
                  <ol>
                    <span style={{ color: "violet" }}>violet</span>
                  </ol>
                </li>
                <li>
                  <ol> Status </ol>
                  <ol>
                    <span className="fail">fail</span>
                  </ol>
                </li>
                <li>
                  <ol> Amount </ol>
                  <ol>
                    <span className="fail">-9.50</span>
                  </ol>
                </li>
                <li>
                  <ol> Create Time </ol>
                  <ol>2/21/2023, 7:39:33 AM</ol>
                </li>
              </ul>
              <div className="myParity_btn">
                <button>Pre Pay</button>
              </div>
            </div>
          </Collapsible>
          <span className="kd_t5"><span className="res_text">fall</span> <span  className="res_text">-91</span></span>
          <span >
            <AiOutlineDown />
          </span>
        </div>
      </div>
    </>
  );
};

export default MyRecord;
