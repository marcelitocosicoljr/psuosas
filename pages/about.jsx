import React from 'react'
import About from '../components/About/About'
import { Footer } from '../components/Footer'
import Header from '../components/Header'

const about = () => {
  return (
    <div className='container'>

        <Header/>

            <main className='main'>
                <About/>


            </main>

        <Footer/>

  </div>
  )
}

export default about
