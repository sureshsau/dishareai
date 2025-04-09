import React from 'react'
import Layout from '../components/layouts/Layout'
import Banner from '../components/HomePage/Banner'
import WhyChooseUs from '../components/HomePage/WhyChooseUs'
import UsedTechSales from '../components/HomePage/UsedTechSales'
import HappyCustomers from '../components/HomePage/HappyCustomerSection'
import FloatingBanner from '../components/HomePage/FloatingBanner'
import EmiPromoSection from '../components/HomePage/EmiPromoSection'


const HomePage = () => {
  return (
    <Layout>
      <div className='w-screen flex flex-col items-center '>
        <Banner/>
        <UsedTechSales/>
        
        <HappyCustomers/>
        <EmiPromoSection/>
        <WhyChooseUs/>
      </div>
    </Layout>
  )
}

export default HomePage