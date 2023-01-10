import React from 'react';
import Table from 'react-bootstrap/Table';

function TableBooking() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Table Number</th>
          <th>Table Size</th>
          <th>Booking Status</th>
          <th>Booked By</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>5</td>
          <td>Available</td>
          <td>None</td>
        </tr>
        <tr>
          <td>2</td>
          <td>8</td>
          <td>Booked</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>3</td>
          <td>2</td>
          <td>Available</td>
          <td>None</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableBooking;