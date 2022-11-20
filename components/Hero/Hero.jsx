import { Box, Typography } from '@mui/material'
import React from 'react'
import { styles } from './styles'

const Hero = () => {
  return (
    <Box sx={styles.heroBox}>
        <img style={styles.heroImage} src='../assets/images/hero.png' alt='hero image' />
        <Typography sx={styles.heroTitle} >Announcements</Typography>
    </Box>
  )
}

export default Hero
