import React from "react";

function ClientItem(props) {
  return (
    <li className="list-item">
      <div className="client-item">
        <div className="media-img">
          <img src="assets/img/companies/company (1).png" alt="" />
        </div>
        <div className="info">
          <span className="title text-semibold">ZILB-WBND </span>
          <span className="sub-title text-semibold">TVL $3.24K%</span>
          <div className="float-item">
            <button className="btn btn-common btn-rounded">View More</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ClientItem;
