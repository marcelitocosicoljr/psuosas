import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ButtonUI from '../UIComponents/Button/Button'
import { styles } from './styles'

const Masthead = () => {
  return (

        <Box sx={styles.mastCon}>
            <Box sx={styles.welcomeBox}>
                <Box sx={styles.welcomeTextCon}>
                    <Typography sx={styles.hashtext}>#EveryStudentMatters</Typography>
                    <Typography sx={styles.secondaryText}>Office of the</Typography>
                    <Typography sx={styles.primaryText}>Students Affairs</Typography>
                    <Box sx={styles.combinePSText}>
                        <Typography sx={styles.secondaryText}>and</Typography>
                        <Typography sx={styles.primaryText}>Services</Typography>
                    </Box>
                    <Typography sx={styles.p}>
                        NEW OSAS, Administration Annex Building, Palawan State University, Tiniguiban Heights, Puerto Princesa City, Palawan, 5300
                    </Typography>
                    <ButtonUI text='View Online Orientation' variant='primary' />


                </Box>
                <Box sx={styles.leftBox}/>
                <Box sx={styles.leftImageBox}>
                    <img style={styles.rightImage} src='../assets/images/osaspeople.png' alt='image 1' />
                </Box>


            </Box>
            <Box sx={styles.welcomeImageBox}>
                <Box sx={styles.wRightImage}>
                    <img style={styles.welcomeImg} src='../assets/images/pic.jpg' alt='image 2' />
                </Box>
                <Box sx={styles.wRightImage}>
                    <img style={styles.welcomeImg} src='../assets/images/pic3.jpg' alt='image 2' />
                </Box>
            </Box>
        </Box>

  )
}

export default Masthead
