import { bodyColor, greyColor, primaryColor } from "../../styles/Utility/colorTheme";

export const styles = {
    navContainer:{
        bgcolor: 'grey',
        width:'100%',
        py: '15px',
        px: {md:'20px'},
        bgcolor: bodyColor,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    logoContainer:{
        display:'flex',
        flexDirection: 'row',
        alignItems : 'center',
        gap:1,

    },
    titleCon:{
        dispaly: 'flex',
        flexDirection: 'column',
    },
    title:{
        fontWeight:600,
        fontSize: '23px',
        color: primaryColor,
        lineHeight: 1.2,
        display:{xs:'none',md:'block'}
    },
    subTitle:{
        fontWeight:400,
        fontSize: '13px',
        color: greyColor,
        display:{xs:'none',md:'block'}

    },
    mobileTitle:{
        fontWeight:600,
        fontSize: '18px',
        color: primaryColor,
        lineHeight: 1.2,
        display:{xs:'block', md:'none'}
    },
    buttonContainer:{
        display:{xs:'none', md:'flex'},
        flexDirection:'row',
        gap:2,
        alignItems: 'center',
    },
    navCon:{
        display:{xs:'none',lg:'flex'},
        flexDirection: 'row',
        alignItems: 'center',
        gap:4,


    },
    navLink:{
        fontWeight:500,
        fontSize: '14px',
        color: greyColor,
        '&:hover' : {color:primaryColor}
    },
    navLinkActive:{
        fontWeight:600,
        color: primaryColor,
        borderBottom: 'solid 2px'+primaryColor
    },
    rightButtons:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
    }












}