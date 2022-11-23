import { Box, Button, IconButton, Typography } from '@mui/material'
import React,{useState} from 'react'
import Image from 'next/image'
import {styles} from './style'
import "@fontsource/dm-sans";
import ButtonUi from '../UIComponents/Button/Button';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { secondaryColor, textColor } from '../../styles/Utility/colorTheme';
import DropdownMenu from './DropdownMenu';
import Avatar from "@material-ui/core/Avatar";
import { primaryColor } from '../../styles/Utility/colorTheme';
import ChatLayout from '../ChatMsg/ChatLayout';

const HeaderNav = () => {
  const [openChat, setOpenChat] = useState(false)
  const router = useRouter()

  return (
    <div>

      <Box sx={styles.navContainer}>
            <Box sx={styles.logoContainer}>
                <img className='headerLogo' src={'assets/images/osaslogo.jpg'} alt='osas logo' />
                <Box sx={styles.titleCon}>
                  <Typography sx={styles.title}>Palawan State University</Typography>
                  <Typography sx={styles.subTitle}>Office of the Student Affairs and Services</Typography>

            <Typography sx={styles.mobileTitle}>PSU OSAS</Typography>
          </Box>
        </Box>
        <Box sx={styles.navCon}>
          <Link href="/">
            <Typography
              sx={[
                styles.navLink,
                router.pathname == "/" && styles.navLinkActive,
              ]}
            >
              Home
            </Typography>
          </Link>
          <Link href="announcements">
            <Typography
              sx={[
                styles.navLink,
                router.pathname == "/announcements" && styles.navLinkActive,
              ]}
            >
              Announcement
            </Typography>
          </Link>
          <Link href="students">
            <Typography
              sx={[
                styles.navLink,
                router.pathname == "/students" && styles.navLinkActive,
              ]}
            >
              Students
            </Typography>
          </Link>
          <Link href="about">
            <Typography
              sx={[
                styles.navLink,
                router.pathname == "/about" && styles.navLinkActive,
              ]}
            >
              About Us
            </Typography>
          </Link>
          <Link href="contact">
            <Typography
              sx={[
                styles.navLink,
                router.pathname == "/contact" && styles.navLinkActive,
              ]}
            >
              Contact Us
            </Typography>
          </Link>
        </Box>
        <Box sx={styles.rightButtons}>
          <Box sx={styles.buttonContainer}>
            <ButtonUi text="Sign in" variant="secondary" />
            <ButtonUi text="Sign up" variant="primary" />
          </Box>
          <DropdownMenu />
        </Box>

      </Box>

        <Box sx={styles.chatCon}>
          {
            openChat ?
            <>
              <IconButton sx={styles.closeChat} onClick={()=>setOpenChat(false)}>
                <Icon icon='material-symbols:close-rounded' size={30}  />
              </IconButton>
              <ChatLayout/>
            </>
            :
            <Button sx={styles.openChat}  onClick={()=>setOpenChat(true)}>
              <Icon icon='bi:chat-right-dots-fill' style={styles.chatIcon} color={'#4C0600'} />
              <img src='../assets/images/icon.png' alt='icon' style={styles.icon} />
            </Button>

          }

        </Box>
    </div>
    );
};

export default HeaderNav;
