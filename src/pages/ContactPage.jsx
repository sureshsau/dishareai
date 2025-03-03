import React from 'react'
import Layout from '../components/layouts/Layout'
import ContactSection from '../components/ContactPage/ContactSection'

const ContactPage = () => {
  return (
    <Layout>
        <div className='w-screen flex flex-col items-center'>
            <ContactSection/>
        </div>
    </Layout>
  )
}

export default ContactPage