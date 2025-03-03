import React from 'react'
import Layout from '../components/layouts/Layout'
import CompanyOverview from '../components/AboutPage/CompanyOverview'
import CompanyHistory from '../components/AboutPage/CompanyHistory'
import Team from '../components/AboutPage/Team'
import Awards from '../components/AboutPage/Awards'
import Testimonials from '../components/AboutPage/Testimonials'

const AboutPage = () => {
  return (
    <Layout>
      <div className='py-5 flex flex-col w-screen h-full items-center'>
        <CompanyOverview/>
        <CompanyHistory/>
        <Team/>
        <Awards/>
        <Testimonials/>
      </div>
    </Layout>
  )
}

export default AboutPage