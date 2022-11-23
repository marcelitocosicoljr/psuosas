import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Hero from '../Hero/Hero'
import { styles } from './styles'

export const Students = () => {
  return (
    <Box>
        <Hero title='Students'/>
        <Link href='https://student.ourpsu.com/' rel='noreferrer' target='_blank'>
          <Button  sx={styles.cardButton}>
              <Typography sx={styles.cardLink}>Students Portal</Typography>
              <img src='../assets/images/students.png' style={styles.image} alt='students' />
          </Button>
        </Link>

    </Box>
  )
}
