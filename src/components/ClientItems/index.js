import React from "react";
import ClientItem from "./ClientItem";

function ClientItems(props) {
  return (
    <div className="follow">
      <div className="card">
        <ul className="list-media">
          <ClientItem />
          <ClientItem />
          <ClientItem />
          <ClientItem />
          <ClientItem />
        </ul>
      </div>
    </div>
  );
}

export default ClientItems;
