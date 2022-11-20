import React,{useState} from 'react';
import {Box, Avatar,Tooltip,Menu,Logout,MenuItem,ListItemIcon,Divider,IconButton} from '@mui/material';
import { Icon } from '@iconify/react';
import { secondaryColor } from '../../styles/Utility/colorTheme';
import Link from 'next/link';
import ButtonUI from '../UIComponents/Button/Button';
// import ButtonUI from '../UIComponents/Button/Button';


const DropdownMenu = ()=> {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center',zIndex:999999, textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2, display:{xs:'flex', lg:'none'}}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                <Icon icon="heroicons-outline:menu-alt-3" style={{color:secondaryColor }} />

          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       <Link href='/' >
            <MenuItem sx={styles.link}>
                <ListItemIcon>
                    <Icon icon="system-uicons:home-door" width={25} />
                </ListItemIcon> Home
            </MenuItem>
        </Link>

        <Link href='/' >
            <MenuItem  sx={styles.link}>
                <ListItemIcon>
                    <Icon icon="icon-park-outline:announcement" width={25}/>
                </ListItemIcon> Announcements
            </MenuItem>
        </Link>


        <Link href='/' >
            <MenuItem  sx={styles.link}>
                <ListItemIcon>
                    <Icon icon="bi:people" width={25} />
                </ListItemIcon> Students
            </MenuItem>
        </Link>


        <Link href='/' >
            <MenuItem  sx={styles.link}>
                <ListItemIcon>
                    <Icon icon="mdi:about-variant" width={25} />
                </ListItemIcon> About Us
            </MenuItem>
        </Link>

        <Link href='/' >
            <MenuItem  sx={styles.link}>
                <ListItemIcon>
                    <Icon icon="ic:baseline-connect-without-contact" width={25} />
                </ListItemIcon> Contact Us
            </MenuItem>
        </Link>

        <Divider sx={{mb:1}} />


        <Link href='/' >
            <MenuItem  sx={styles.link}>
              <ButtonUI text='Sign In' variant='secondary' />
            </MenuItem>
        </Link>

        <Link href='/' >
            <MenuItem  sx={styles.link}>
            <ButtonUI text='Sign Up' variant='primary' />
            </MenuItem>
        </Link>

        <MenuItem>
          <Avatar /> My account
        </MenuItem>


        <Link href='/' >
            <MenuItem  sx={styles.link}>
                <ListItemIcon>
                    <Icon icon="fe:logout" width={25} />
                </ListItemIcon> Logout
            </MenuItem>
        </Link>

      </Menu>
    </div>
  );
}


export default DropdownMenu

const styles = {
    link:{
        textDecoration:'none',
        color : secondaryColor,
    }
}