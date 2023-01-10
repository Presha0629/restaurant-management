// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import TableBooking from '../../components/booking/bookingtable';

// const AdminDashboard = () => {
//   return (
//     <>
//       <Navbar bg="primary" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Table Booking</Nav.Link>
//             <Nav.Link href="#home">Table Orders</Nav.Link>
//             <Nav.Link href="#home">Your Menu</Nav.Link>
//             {/* Keep all the functionalities that the admin can perform */}
//             {/* user ko photo pani chaiyo */}
//           </Nav>
//         </Container>
//       </Navbar>
//       <br />
//       <Container>
//         <TableBooking />
//       </Container>
      
//     </>
//   );
// }

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
import TableBooking from '../../components/bookingtable';
import TableList from '../../components/TableList';
import MenuList from '../../components/MenuList';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  useEffect(() => {
    // Fetch tables and menu items from the server here
    // and store them in the appropriate state variables
  }, []);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setActiveTab('bookings')}>Table Booking</Nav.Link>
            <Nav.Link onClick={() => setActiveTab('tables')}>Tables</Nav.Link>
            <Nav.Link onClick={() => setActiveTab('menu')}>Menu</Nav.Link>
            {/* Keep all the functionalities that the admin can perform */}
            {/* user ko photo pani chaiyo */}
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
          <Tab eventKey="bookings" title="Table Bookings">
            <TableBooking />
          </Tab>
          <Tab eventKey="tables" title="Tables">
            <TableList />
          </Tab>
          <Tab eventKey="menu" title="Menu">
            <MenuList />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default AdminDashboard;
