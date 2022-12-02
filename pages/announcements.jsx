import { Box, Typography } from '@mui/material'
import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import { Footer } from '../components/Footer'
import Header from '../components/Header'

const announcements = () => {
  return (
    <div className='container'>

      <Header/>

      <main className='main'>

            <Announcement/>
      </main>

      <Footer/>

    </div>
  )
}

export default announcements
