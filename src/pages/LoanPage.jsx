import React from 'react'
import Layout from '../components/layouts/Layout'
import LoanServices from '../components/LoanPage/LoanServices'
import LoanApplicationForm from '../components/LoanPage/LoanApplicationForm'
import Banner from '../components/HomePage/Banner'
import UsedTechSales from '../components/LoanPage/UsedTechSales'

const LoanPage = () => {
  return (
    <Layout>
        <div className='flex flex-col items-center w-screen my-5'>
          <Banner/>
          <UsedTechSales/>
        </div>
    </Layout>
  )
}

export default LoanPage