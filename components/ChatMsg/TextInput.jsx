import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Icon } from '@iconify/react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { primaryColor } from '../../styles/Utility/colorTheme';
import ButtonUi from '../UIComponents/Button/Button';


const classes = {
    wrapForm : {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft:'20px',
        paddingRight:'10px',
        marginBottom:'20px',
        alignItems: 'flex-end',
    },
    wrapText  : {
        width: "100%",

    },
    button: {
        display:'flex',
        '&:hover':{bgcolor:'transparent'},

    },
    suggestCon:{
        position:'relative',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        gap:1,
        maxWidth:'95%',
        maxHeight:'200px',
        mb:1,
        overflow:'hidden',
        pb:1
    },
    suggestBtn:{
        borderRadius:'30px',
        bgcolor:'#FDFAF8',
        color: primaryColor,
        border:'solid 1px'+primaryColor,
        fontSize:'12px',
        px:'1px',
        textTransform:'capitalize',
        lineHeight:'15px',
        px:'10px'
    }
  }


export const TextInput = () => {
    return (
        <>
            <Box sx={classes.suggestCon}>
                <Button sx={classes.suggestBtn} >What is the meaning of OSAS?</Button>
                <Button sx={classes.suggestBtn} >Where is Osas Located?</Button>
                <Button sx={classes.suggestBtn} >Contact Osas</Button>

                <Button sx={classes.suggestBtn} >What is OSAS?</Button>
                <Button sx={classes.suggestBtn} >OSAS means?</Button>
                <Button sx={classes.suggestBtn} >Contact Osas</Button>

                <Button sx={classes.suggestBtn} >What is OSAS?</Button>
                <Button sx={classes.suggestBtn} >OSAS means?</Button>
                <Button sx={classes.suggestBtn} >Contact Osas</Button>
            </Box>
            <form style={classes.wrapForm}  noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    label="Type question..."
                    variant="standard"
                    style={classes.wrapText}
                />
                <IconButton  style={classes.button}>
                    <Icon icon='carbon:send' width={25} color={primaryColor}  />
                </IconButton>
            </form>
        </>
    )
}



