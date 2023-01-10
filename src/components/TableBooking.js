import React from 'react';

import { useState, useEffect } from 'react';

import { Table, Button } from 'react-bootstrap';

const TableBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from the server here
    // and update the state using setBookings
  }, []);

  const handleEditBooking = (bookingId) => {
    // Open a modal or form to edit the booking with the given ID
  };

  const handleDeleteBooking = (bookingId) => {
    // Delete the booking with the given ID from the server
    // and update the state using setBookings
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Table</th>
          <th>Date</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.customer}</td>
            <td>{booking.table}</td>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td>
              <Button onClick={() => handleEditBooking(booking.id)}>Edit</Button>
              <Button onClick={() => handleDeleteBooking(booking.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableBooking;
