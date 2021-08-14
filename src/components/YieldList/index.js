import React from "react";
import YieldListItem from "./YieldListItem";

function YieldList(props) {
  return (
    <div className="follow">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">TOP 5 APY%</h4>
        </div>
        <ul className="list-media">
          <YieldListItem />
          <YieldListItem />
          <YieldListItem />
          <YieldListItem />
          <YieldListItem />
        </ul>
      </div>
    </div>
  );
}

export default YieldList;
