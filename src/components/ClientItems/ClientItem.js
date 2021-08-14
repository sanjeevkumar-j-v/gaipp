import React from 'react';

function ClientItem(props) {
    return (
      <li class="list-item">
        <div class="client-item">
          <div class="media-img">
            <img src="assets/img/companies/company (1).png" alt="" />
          </div>
          <div class="info">
            <span class="title text-semibold">ZILB-WBND </span>
            <span class="sub-title text-semibold">TVL $3.24K%</span>
            <div class="float-item">
              <button class="btn btn-common btn-rounded">View More</button>
            </div>
          </div>
        </div>
      </li>
    );
}

export default ClientItem;