import React from "react";
import TableRow from "./TableRow";

function TableWithGraph(props) {
  return (
    <div className="table-overflow">
      <table className="table table-striped table-lg">
        <thead>
          <tr>
            <td className="text-dark text-semibold">Asset</td>
            <td className="text-dark text-semibold">Last Price</td>
            <td className="text-dark text-semibold">Today's Change</td>
            <td className="text-dark text-semibold">Chart</td>
            <td className="text-dark text-semibold">Trade</td>
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

export default TableWithGraph;
