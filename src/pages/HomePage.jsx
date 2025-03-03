import React from 'react'
import Layout from '../components/layouts/Layout'
import Banner from '../components/HomePage/Banner'

const HomePage = () => {
  return (
    <Layout>
      <div className='w-screen h-screen flex flex-col items-center '>
        <Banner/>
          <h1>welcome</h1>
      </div>
    </Layout>
  )
}

export default HomePage