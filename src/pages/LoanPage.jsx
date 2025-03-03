import React from 'react'
import Layout from '../components/layouts/Layout'
import LoanServices from '../components/LoanPage/LoanServices'
import LoanApplicationForm from '../components/LoanPage/LoanApplicationForm'

const LoanPage = () => {
  return (
    <Layout>
        <div className='flex flex-col items-center w-screen my-5'>
          <LoanServices/>
          <LoanApplicationForm/>
        </div>
    </Layout>
  )
}

export default LoanPage