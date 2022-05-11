import React from 'react'
import { Card } from 'react-bootstrap'

export default function Info(props) {
  return (
    <Card>
      <Card.Body>
        <h2>Info:</h2>
        <div>{props.number}</div>
        <div>{props.name}</div>
      </Card.Body>
    </Card>
  )
}