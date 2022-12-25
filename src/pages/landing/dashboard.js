import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Today's Stats</h2>
      <ul>
        <li>Number of reservations: {/* insert code to retrieve number of reservations */}</li>
        <li>Number of customers served: {/* insert code to retrieve number of customers served */}</li>
        <li>Total sales: {/* insert code to retrieve total sales */}</li>
      </ul>
      <h2>Recent Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Number of Guests</th>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {/* insert code to retrieve recent reservations */}
          <tr>
            <td>{/* time of reservation */}</td>
            <td>{/* number of guests */}</td>
            <td>{/* name of reservation */}</td>
            <td>{/* phone number of reservation */}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;