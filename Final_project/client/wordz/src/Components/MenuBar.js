import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const MenuBar = () => {
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Wordz</Navbar.Brand>
      <Nav className="mr-auto">
        <button>Add card</button>
        <button>My stats</button>
        <button>Log out</button>
      </Nav>
    </Navbar>
  )
}
