import React from 'react'
import { Spinner, Container } from 'react-bootstrap'
const Loader = () => {
  return (
    <Container className='my-2'>
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </Container>
  )
}

export default Loader
