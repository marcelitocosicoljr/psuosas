import { Box, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import Hero from '../Hero/Hero'
import { styles } from './styles'
import ButtonUi from '../UIComponents/Button/Button';
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div>
        <Hero title='Contact Us' />

        <Typography variant='body1' sx={styles.title}>
            Want to get in touch? We'd love to hear from you.<br/>For more information, you may contact us through;
        </Typography>

        <Box sx={styles.linkCon}>
            <Box sx={styles.contactLink}>
                <Icon icon='logos:google-gmail' width={20} />
                <a href='mailto:osas@psu.palawan.edu.ph' target='_blank'>
                    <Typography variant='body1' sx={styles.link} >
                        osas@psu.palawan.edu.ph
                    </Typography>
                </a>

            </Box>
            <Box sx={styles.contactLink}>
                <Icon icon='ph:phone-call' width={20} />
                <a>
                    <Typography variant='body1' sx={styles.link} >
                        (048) 434-3625
                    </Typography>
                </a>

            </Box>
            <Box sx={styles.contactLink}>
                <Icon icon='logos:facebook' width={20} />
                <a href='https://www.facebook.com/psu.osas' target='_blank'>
                    <Typography variant='body1' sx={styles.link} >
                        facebook.com/psu.osas
                    </Typography>
                </a>

            </Box>
        </Box>

        <Box sx={styles.contactCon}>
            <Box sx={styles.contact}>
                <TextField label='Full name' size='small' />
                <TextField  label='Email address' type='email' size='small' />
                <TextareaAutosize
                    minRows={8}
                    placeholder="Your concern.."
                    style={styles.textArea}
                />
                <ButtonUi text='Submit' variant='primary' />
            </Box>
        </Box>

        <Box sx={styles.mapCon}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.866840894135!2d118.73165831479231!3d9.777333093004046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5635b6bd6d3ed%3A0x8b42cc60a81a12b9!2sPalawan%20State%20University!5e0!3m2!1sen!2sph!4v1669172833281!5m2!1sen!2sph"  style={styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    </div>
  )
}

export default Contact
