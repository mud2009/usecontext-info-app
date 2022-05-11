import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function MyNavbar() {
  return (
    <div className='pl-2 pr-2'>
      <Navbar className='justify-content-between'>
          <Navbar.Brand href="/">Info Feed</Navbar.Brand>
          <Nav className='flex-grow'>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
      </Navbar>
    </div>
    )
}