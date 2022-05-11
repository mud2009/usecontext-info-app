import React, { useRef} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function MyNavbar() {
  const { currentUser } = useAuth()
  let userDisplay = useRef("Log In")
  if(currentUser){
    userDisplay = currentUser.email
  } else {
    userDisplay = "Log In"
  }
  return (
    <div className='ml-2 mr-2'>
      <Navbar className='justify-content-between'>
          <Navbar.Brand href="/">Info Feed</Navbar.Brand>
          <Nav className='flex-grow'>
            <Nav.Link href="/login">{userDisplay}</Nav.Link>
          </Nav>
      </Navbar>
    </div>
    )
}