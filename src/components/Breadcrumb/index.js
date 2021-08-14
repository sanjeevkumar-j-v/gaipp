import React from 'react';

function Breadcrumb(props) {
    return (
      <div class="container-fluid">
        <div class="breadcrumb-wrapper row">
          <div class="col-12 col-lg-3 col-md-6">
            <ol class="breadcrumb">
              <li>
                <a href="/">Dashboard {">"}</a>
              </li>
              <li class="active">Overview</li>
            </ol>
          </div>
        </div>
      </div>
    );
}

export default Breadcrumb;