import React from 'react'
import { Container, Alert } from 'react-bootstrap'

function Message({ message, variant }) {
  return (
    <Container>
      <Alert variant={variant}>{message}</Alert>
    </Container>
  )
}

export default Message
