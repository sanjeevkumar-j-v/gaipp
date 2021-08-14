import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>
        <div className="list-media">
          <div className="list-item">
            <div className="media-img">
              <img
                src="assets/img/companies/company (7).png"
                width="100"
                alt=""
              />
            </div>
            <div className="info">
              <span className="title text-semibold">Polaris</span>
            </div>
          </div>
        </div>
      </td>
      <td>$12.81</td>
      <td>$4,485</td>
      <td>
        <a href="/" className="badge badge-danger">
          -5.95%
        </a>
      </td>
      <td>$423.00</td>
      <td>$168.00</td>
    </tr>
  );
}

export default TableRow;
