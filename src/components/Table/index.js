import React from 'react';
import TableRow from './TableRow';

function Table(props) {
    return (
      <div class="table-overflow">
        <table class="table table-striped table-lg">
          <thead>
            <tr>
              <td class="text-dark text-semibold">Coin</td>
              <td class="text-dark text-semibold">Price</td>
              <td class="text-dark text-semibold">Market Cap</td>
              <td class="text-dark text-semibold">Price 24%</td>
              <td class="text-dark text-semibold">TVL</td>
              <td class="text-dark text-semibold">TVL Ration</td>
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