import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Chart from './Chart'
import { useFetch } from './hooks/useFetch'
import { Container } from 'react-bootstrap'
import Loader from './Loader'

const City = () => {
  const { id } = useParams()
  const cityId = parseInt(id)

  const Api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  const url = `
  https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${Api_key}&units=metric
  `

  const [isLoading, fetchedData, hasError] = useFetch(url, url)
  const city = fetchedData?.city
  const list = fetchedData?.list
  let fiveDaysWeather = []
  if (list) {
    for (let i = 0; i < list.length; i = i + 8) {
      fiveDaysWeather.push(list[i])
    }
  }

  return (
    <Container className='py-5 '>
      <h1 className='fontlight'>5 day Forecast</h1>
      {isLoading && <Loader />}
      {hasError && (
        <p style={{ color: '#fff' }}>
          Sorry! failed to fetch the wither history for {city.name} ..please try
          agine later!
        </p>
      )}
      {!hasError && fiveDaysWeather.length === 5 && (
        <>
          <h2 style={{ color: '#fff' }}>{city.name}</h2>
          <Chart fiveDaysWeather={fiveDaysWeather} />
        </>
      )}

      <Link to='/'>Go Back</Link>
    </Container>
  )
}

export default City
