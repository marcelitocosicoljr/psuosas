import { Button } from '@mui/material'
import React from 'react'
import { pHoverColor, primaryColor, secondaryColor } from '../../../styles/Utility/colorTheme'
import {styles} from './style'


const ButtonUI = ({text,variant}) => {
  return (
      <Button
        variant={variant == 'primary' ? 'contained' : variant == 'secondary' ? 'outlined' : 'text'}
        disableElevation
        sx={[variant == 'primary' && styles.primaryButton,
             variant == 'secondary' && styles.secondaryButton,
             variant == 'text' && styles.textButton,
             styles.buttonUI,
         {'&:hover':{
          bgcolor: variant == 'primary' && secondaryColor,
          borderColor:variant == 'secondary' && secondaryColor,
          color:variant == 'secondary' && secondaryColor,
        }}]}
        >
        {text}
      </Button>
  )
}

export default ButtonUI
