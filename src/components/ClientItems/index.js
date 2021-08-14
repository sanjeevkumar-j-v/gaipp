import React from "react";
import ClientItem from "./ClientItem";

function ClientItems(props) {
  return (
    <div class="follow">
      <div class="card">
        <ul class="list-media">
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
