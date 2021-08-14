import React from "react";

function YieldListItem(props) {
  return (
    <li className="list-item">
      <div className="client-item" style={{ padding: "5px 10px" }}>
        <div className="">
          <span className="title text-semibold">1-inch chip</span>
          <span className="float-item" style={{ float: "right" }}>
            <span className="sub-title text-semibold">$3.24K%</span>
          </span>
        </div>
      </div>
    </li>
  );
}

export default YieldListItem;
