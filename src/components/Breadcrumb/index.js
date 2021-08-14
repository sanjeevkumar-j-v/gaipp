import React from "react";

function Breadcrumb(props) {
  return (
    <div className="container-fluid">
      <div className="breadcrumb-wrapper row">
        <div className="col-12 col-lg-3 col-md-6">
          <ol className="breadcrumb">
            <li>
              <a href="/">Dashboard {">"}</a>
            </li>
            <li className="active">{props.pageName}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
