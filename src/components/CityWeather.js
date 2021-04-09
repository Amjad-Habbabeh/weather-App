import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

const CityWeather = ({ name, coord, sys, main, weather, handleDelete, id }) => {
  return (
    <Container fluid='md' className='py-3 w-75  '>
      <Card id={id} className='customCard'>
        <Card.Header className='cardHeader'>
          <Row>
            {' '}
            <Col>
              <Link to={`/${id}`}>
                <h2>
                  {name}, {sys.country}
                </h2>
              </Link>
            </Col>
            <Col>
              <Button
                variant='danger'
                className='remove-btn px-2 float-right '
                onClick={handleDelete}
              >
                <TiDeleteOutline className='delete' />
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col style={{ alignSelf: 'center' }}>
              <Card.Title style={{ textAlign: 'left' }} className='px-4'>
                {weather[0].main}{' '}
              </Card.Title>
            </Col>
            <Col>
              <Image
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                fluid
              />
            </Col>
          </Row>
          <Card.Subtitle style={{ textAlign: 'left' }} className='px-4'>
            {weather[0].description}
          </Card.Subtitle>
          <Col className='temp'>
            <p>min temp: {main.temp_min}°C</p>
            <p>max temp: {main.temp_max}°C</p>
            <p>
              location: {coord.lon} , {coord.lat}
            </p>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  )
}
export default CityWeather
