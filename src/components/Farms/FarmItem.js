import React from 'react';

function FarmItem(props) {
    return (
      <li className="list-item">
        <div className="client-item" style={{ padding: "5px" }}>
          <div className="media-img">
            <img src="assets/img/companies/company (1).png" alt="" />
          </div>
          <div className="">
            <span className="title text-semibold">Polaris </span>
          </div>
        </div>
      </li>
    );
}

export default FarmItem;