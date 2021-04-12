import React from 'react'
import {
  Container,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap'

import { FaSearch } from 'react-icons/fa'

const Search = ({ handleSearch, cityName, setCityName }) => {
  return (
    <Container>
      <Form className='my-2'>
        <Form.Row className='align-items-center'>
          <Col xs='auto'>
            <Form.Label htmlFor='inlineFormInputGroup' srOnly>
              Enter City..
            </Form.Label>
            <InputGroup className='mb-2'>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  {' '}
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id='inlineFormInputGroup'
                placeholder='Enter City..'
                onChange={(e) => setCityName(e.target.value)}
                value={cityName}
                autoComplete='off'
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch(event, cityName)
                  }
                }}
              />
            </InputGroup>
          </Col>

          <Col xs='auto'>
            <Button className='mb-2' onClick={(e) => handleSearch(e, cityName)}>
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}
export default Search
