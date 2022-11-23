import { Box, Typography } from '@mui/material'
import React from 'react'
import { styles } from './styles'

const About = () => {
  return (
    <Box sx={styles.aboutCon}>

        <Box sx={styles.textBanner}>
            <Typography sx={styles.titleBanner}>Palawan State University</Typography>
            <Typography sx={styles.captionBanner}>
                A premiere State University in the Southeast Asia that
                provides excellent and relevant Higher Education for
                Sustainable Development.
            </Typography>
        </Box>

        <Box sx={styles.textImage}>
            <Box sx={styles.textLeft}>
                <Typography sx={styles.titleLeft}>Vision</Typography>
                <Typography sx={styles.captionLeft}>
                    An internationally recognized university that provides
                    relevant and innovative education and research
                    for lifelong learning and sustainable development
                </Typography>
            </Box>

            <Box sx={styles.imagesCon}>
                <Box sx={styles.twoVerticalPic}>
                    <img src='../assets/images/psu1.jpg' style={styles.smallImg} alt='about image' />
                    <img src='../assets/images/psu2.jpg' style={styles.smallImg} alt='about image' />
                </Box>
                <Box sx={styles.oneVerticalPic}>
                    <img src='../assets/images/psu3.jpg' style={styles.regImg} alt='about image' />
                </Box>
            </Box>

        </Box>

        <Box sx={[styles.textImage, styles.imageFirst]}>

            <Box sx={styles.imagesCon}>
                <Box sx={styles.twoVerticalPic}>
                    <img src='../assets/images/psu4.jpg' style={styles.smallImg} alt='about image' />
                    <img src='../assets/images/psu5.jpg' style={styles.smallImg} alt='about image' />
                </Box>
                <Box sx={styles.oneVerticalPic}>
                    <img src='../assets/images/psu6.jpg' style={styles.regImg} alt='about image' />
                </Box>
            </Box>


            <Box sx={styles.textRight}>
                <Typography sx={styles.titleLeft}>Mission</Typography>
                <Typography sx={styles.captionLeft}>
                    Palawan State University is committed to upgrade people’s quality of
                    life by providing education oppurtunities through excellent
                    instructions, research and innovation, extensions, production
                    services, and transnational collaborations
                </Typography>
            </Box>

        </Box>
        <br/><br/><br/>


        <Box sx={styles.coreInfo}>
                <Typography variant='h5' sx={styles.coreTitle}>Core Values</Typography>
                <Typography variant='subtitle1'>
                    <strong>E</strong>xcellence in service,<br/>
                    <strong>Q</strong>uality assurance,<br/>
                    <strong>U</strong>nity in diversity, <br/>
                    <strong>A</strong>dvocacy for sustainable development,<br/>
                    <strong>L</strong>eadership by example,<br/>
                    <strong>I</strong>nnovation,<br/>
                    <strong>T</strong>ransparency, and<br/>
                    <strong>Y</strong>outh empowerment<br/>
                    <strong>(EQUALITY)</strong>
                </Typography>
        </Box><br/><br/>

        <Box sx={styles.textBanner}>
            <Typography sx={styles.titleBanner}>PSU Quality Policy</Typography>
            <Typography sx={styles.captionFullBanner}>
                    We Provide equal opportunities for relevant and innovative higher
                    education and advanced studies in Southeast Asia
                    for sustainable development.<br/><br/>

                    We Strongly commit to produce competent
                    and humane graduates and help develop resilient
                    communities through excellent programs in instruction,
                    research, extension, and transnational collaborations.<br/><br/>

                    We shall continually Upgrade our quality management system to adapt to the changing societal needs and aspirations.
            </Typography>
        </Box><br/><br/>

        <Box sx={styles.textBanner}>
            <Typography sx={styles.titleBanner}>OSAS Goals</Typography>
            <Typography sx={styles.captionFullBanner}>
                The Office of Student Affairs and Services is committed
                to support and strengthen instruction by building
                opportunities that would establish understanding
                and harmony between the administration and the
                studentry, create working relationship for the
                ultimate development of the students in order to
                assume roles of leadership as members of their
                communities and professions in the future.
            </Typography>
        </Box><br/><br/>

        <Box sx={styles.textBanner}>
            <Typography sx={styles.titleBanner}>OSAS in Action</Typography>
            <Typography sx={styles.captionFullBanner}>
            Palawan State University- Office of Student Affairs and Services
            is an administrative unit of the University that is within the
            supervision of the Office of the Vice President for Academic Affairs
            (VPAA). The OSAS is responsible for the development and implementation
            of various programs and services that focus on the nonacademic aspects
             of the student’s life in the university such as the acquisition of
              values and skills for a lifelong learning. WE are for the
               STUDENTS because EVERY STUDENT MATTERS.
            </Typography>
        </Box><br/><br/>

        <Box sx={styles.textBanner}>
            <Typography sx={styles.titleBanner}>OSAS Faculty</Typography>
            <Box sx={styles.facultyCon}>
                {
                    [...Array(12)].map(index=>(
                    <Box key={index} sx={styles.personCon}>
                        <img src='../assets/images/person.jpg' alt='person' style={styles.personImg} />
                        <Typography sx={styles.pName}>John Doe</Typography>
                        <Typography sx={styles.pPosition}>John Doe</Typography>
                    </Box>
                    ))
                }

            </Box>
        </Box>


    </Box>
  )
}

export default About
