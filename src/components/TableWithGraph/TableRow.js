import React from "react";
import TinyLineChart from "../Charts/TinyLineChart"
function TableRow(props) {
  return (
    <tr>
      <td>
        <div className="list-media">
          <div className="list-item">
            <div className="media-img">
              <img
                src="assets/img/companies/company (12).png"
                width="100"
                alt=""
              />
            </div>
            <div className="info">
              <span className="title text-semibold">Mdex</span>
              <span className="sub-title text-semibold">Token</span>
            </div>
          </div>
        </div>
      </td>
      <td>$12.81</td>
      <td>
        <a href="/" className="badge badge-danger">
          -5.95%
        </a>
      </td>
      <td>
        <div style={{ height: "50px" }}>
          <TinyLineChart />
        </div>
      </td>
      <td>
        <button className="btn btn-common btn-rounded">Buy</button>
      </td>
    </tr>
  );
}

export default TableRow;
