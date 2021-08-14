import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>
        <div class="list-media">
          <div class="list-item">
            <div class="media-img">
              <img
                src="assets/img/companies/company (7).png"
                width="100"
                alt=""
              />
            </div>
            <div class="info">
              <span class="title text-semibold">Polaris</span>
            </div>
          </div>
        </div>
      </td>
      <td>$12.81</td>
      <td>$4,485</td>
      <td>
        <a href="/" class="badge badge-danger">
          -5.95%
        </a>
      </td>
      <td>$423.00</td>
      <td>$168.00</td>
    </tr>
  );
}

export default TableRow;
