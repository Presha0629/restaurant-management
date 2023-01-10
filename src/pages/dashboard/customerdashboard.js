import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Option from '../../components/card';

const CustomerDashboard = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            
        </Nav>
      </Container>
    </Navbar>
    <Option title="Menu" about="Order your Food"
     imgSrc="../images/menu.jpg"/>
    <Option title="Table List" about="Book your Table"
    imgSrc=""/>
    </>

  );
}

export default CustomerDashboard;