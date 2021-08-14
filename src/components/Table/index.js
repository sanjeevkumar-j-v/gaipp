import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  return (
    <div className="table-overflow">
      <table className="table table-striped table-lg">
        <thead>
          <tr>
            <td className="text-dark text-semibold">Coin</td>
            <td className="text-dark text-semibold">Price</td>
            <td className="text-dark text-semibold">Market Cap</td>
            <td className="text-dark text-semibold">Price 24%</td>
            <td className="text-dark text-semibold">TVL</td>
            <td className="text-dark text-semibold">TVL Ration</td>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
