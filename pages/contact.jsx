import React from 'react'
import Contact from '../components/Contact/Contact'
import { Footer } from '../components/Footer'
import Header from '../components/Header'

const contact = () => {
  return (
    <div>
        <Header/>

        <main className='main'>
            <Contact/>

        </main>

        <Footer/>
    </div>
  )
}

export default contact
