import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Chart = ({ fiveDaysWeather }) => {
  const data = fiveDaysWeather.map((day) => {
    const { dt_txt, main } = day
    const { temp } = main
    const dayForcast = { temp, dt_txt }
    return dayForcast
  })
  return (
    <ResponsiveContainer width='90%' height={200} className='chartSmall'>
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 2,
          left: 2,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='dt_txt' />
        <YAxis />
        <Tooltip />
        <Area type='monotone' dataKey='temp' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart
