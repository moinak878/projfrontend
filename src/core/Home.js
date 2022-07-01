import React from 'react'
import { API } from '../backend'
import Base from './Base'

const Home = () => {
  return (
    <Base title="Home" description="my Home" className='text-white m-3'>
    {API}
    Hello from frontend
    </Base>
  )
}

export default Home