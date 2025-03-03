import React from 'react'
import Layout from '../components/layouts/Layout'
import ContactSection from '../components/ContactPage/ContactSection'
import Banner from '../components/HomePage/Banner'

const ContactPage = () => {
  return (
    <Layout>
        <div className='w-screen flex flex-col items-center'>
            <Banner/>
            <ContactSection/>
        </div>
    </Layout>
  )
}

export default ContactPage