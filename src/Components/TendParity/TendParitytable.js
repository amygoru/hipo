import React from "react";
import "./TendParity.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
const TendParitytable = () => {
  return (
    <>
      <div id="per" className="box">
        <div className="grid">
          <div className="row">
            
          <table className="table table-responsive responsive">
          <tr>
            <th>1</th>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-green">059</div>
              </div>
            </td>
            <td>
              <div className="cell border">
                <div className="item-red">057</div>
              </div>
            </td>
          </tr>
        </table>
          </div>
        </div>

       
      </div>
      <div className="progresscars">
      <div>
      <ProgressBar style={{marginTop:'3px'}}  variant="success" now={40} />
      <ProgressBar  style={{marginTop:'3px'}} variant="info" now={20} />
      <ProgressBar  style={{marginTop:'3px'}} variant="warning" now={60} />
      <ProgressBar  style={{marginTop:'3px'}} label={`Red:189`} variant="danger" now={80} />
    </div>
      </div>
    </>
  );
};

export default TendParitytable;
