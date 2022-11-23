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
    },
    chatCon:{
        position:'fixed',
        bottom:{xs:'20px',md:'50px'},
        right:{xs:'20px',md:'50px'},
        zIndex:3,
    },
    openChat:{
        zIndex:4,
        position:'absolute',
        right:{xs:'0px',md:'30px'},
        bottom:'0px',
        bgcolor:'#fff',
        borderRadius:'50%',
        borderRadius:'30px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        '&:hover':{
            bgcolor:'#F4D4C2'
        }
    },

    chatIcon:{
        width:'25px',
        height:'25px',

        position:'absolute',
        top:'-10px',
        left:'-5px',

    },
    icon:{
        width:'50px',
        objectFit:'contain'
    },
    closeChat:{
        zIndex:4,
        position:'absolute',
        right:'0px',
        background:'#fff',

    },












}