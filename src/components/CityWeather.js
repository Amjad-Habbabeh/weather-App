import React from 'react'
import { MdDelete } from 'react-icons/md'
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

const CityWeather = ({ name, coord, sys, main, weather, handleDelete, id }) => {
  return (
    <Container fluid='md' className='py-3 w-75  '>
      <Card id={id} className='customCard'>
        <Card.Header className='cardHeader'>
          <Row>
            {' '}
            <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
              <Col>
                <h2>
                  {name}, {sys.country}
                </h2>
              </Col>
            </Link>
            <Col>
              <Button
                variant='danger'
                className='remove-btn px-2 float-right '
                onClick={handleDelete}
              >
                <MdDelete />
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <Card.Body style={{ color: '#dcb591' }}>
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
              <p>
                min temp: {main.temp_min}°C <FaTemperatureLow />
              </p>
              <p>
                max temp: {main.temp_max}°C <FaTemperatureHigh />
              </p>
              {/* <p>
                location: {coord.lon} , {coord.lat}
              </p> */}
            </Col>
          </Card.Body>
        </Link>
      </Card>
    </Container>
  )
}
export default CityWeather
