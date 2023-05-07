import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
let Link = "http://localhost:3000";
const Vikash = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav className="container-fluid">
          <Nav.Item>
            <Navbar.Brand as={Link} to="/">Demo App</Navbar.Brand>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/user-list">User List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Log Out</Nav.Link>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Nav.Link>Hi fname lname!</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>

    );
}

export default Vikash;
