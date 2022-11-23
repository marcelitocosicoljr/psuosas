import { bodyColor, primaryColor } from "../../styles/Utility/colorTheme";

export const styles = {
    cardButton:{
        width:{xs:'100%', md:'70%',lg:'50%'},
        borderRadius:2,
        p:'20px',
        bgcolor:bodyColor,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        mx:'auto',
        mt:4,
        boxShadow: 'rgba(149, 157, 165, .2) 0px 8px 24px',
    },
    image:{
        width:'50%',
        objectFit:'contain'
    },
    cardLink:{
        fontSize:{xs:'20px',md:'30px'},
        fontWeight:600,
        color: primaryColor,
        textTransform:'capitalize',
        textAlign:'left'
    }
}