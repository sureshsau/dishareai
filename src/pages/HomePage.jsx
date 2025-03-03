import React from 'react'
import Layout from '../components/layouts/Layout'
import Banner from '../components/HomePage/Banner'
import Mission from '../components/HomePage/Mission'
import WhyChooseUs from '../components/HomePage/WhyChooseUs'

const HomePage = () => {
  return (
    <Layout>
      <div className='w-screen flex flex-col items-center '>
        <Banner/>
        <Mission/>
        <WhyChooseUs/>
      </div>
    </Layout>
  )
}

export default HomePage