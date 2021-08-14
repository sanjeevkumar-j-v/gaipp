import React from "react";
import FarmItem from "./FarmItem";

function Farms(props) {
  return (
    <div className="follow">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Farms</h4>
        </div>
        <ul className="list-media">
          <FarmItem />
          <FarmItem />
          <FarmItem />
          <FarmItem />
          <FarmItem />
          <FarmItem />
          <FarmItem />
          <FarmItem />
          <FarmItem />
          <FarmItem />
        </ul>
      </div>
    </div>
  );
}

export default Farms;
