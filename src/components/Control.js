import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import {useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from 'react-router-dom'

export default function Control() {
  const { currentUser, logOut } = useAuth()
  const history = useNavigate()
  if (!currentUser){
    return(
      <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            <Link className='btn btn-primary w-100 mt-3' to="/login">Log In</Link>
          </Card.Body>
        </Card>
      </>
    ) 
  }
  return (
    <>
    </>
    )
}