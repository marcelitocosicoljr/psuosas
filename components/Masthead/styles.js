import { maxWidth } from "@mui/system";
import { bodyColor, pHoverColor, pLightColor, primaryColor, textColor } from "../../styles/Utility/colorTheme";

export const styles = {
    mastCon:{
        display: 'flex',
        flexDirection: {xs:'column',md:'row'},
        width:'100%',
        justifyContent: {xs:'flex-start',md:'center'},
        pt:3,
        position:'relative'
    },
    welcomeBox:{
        width:{md:'55%'},
        height:{md:'80vh'},
        display:'flex',
        justifyContent: {xs:'flex-start',md:'center'},
        position:'relative',
        alignItems:'center',
        zIndex:2,
    },
    welcomeTextCon:{
        display: 'flex',
        flexDirection:'column',
        zIndex: 2,
        justifyContent: {xs:'flex-start',md:'center'},
        maxWidth:{xs:'100%',md:'80%'},


    },
    p:{
        fontSize: '14px',
        color:textColor,
        maxWidth:'80%',
        mb:5

    },
    leftBox:{
        position:'absolute',
        width:'80%',
        height:'80%',
        borderRadius:5,
        bgcolor:bodyColor,
        left:1,
        zIndex:1,
        opacity:.8,
        filter: 'blur(1px)',
        boxShadow: 'rgba(149, 157, 165, 0.05) 0px 8px 24px',
        display:{xs:'none', md:'block'},


    },
    hashtext:{
        background: pLightColor,
        color: primaryColor,
        p:'4px 10px',
        borderRadius:1,
        fontSize:'14px',
        fontWeight:500,
        width:'max-content',
    },
    primaryText:{
        fontSize: {xs:'35px',md:'55px'},
        fontWeight:700,
        color: primaryColor,
        lineHeight:{xs:1,md:.8},
        width:'100%'
    },
    secondaryText:{
        fontSize: {xs:'35px',md:'55px'},
        fontWeight:500,
        color:textColor
    },
    combinePSText:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        gap:2,
        mb:1
    },
    leftImageBox:{
        position:'absolute',
        right:1,
        height:'100%',
        width:'350px',
        overflow: 'hidden',
        borderRadius:3,
        display:{xs:'none', md:'flex'}
    },
    rightImage:{
        objectFit: 'cover',
        width:'100%',
        height:'100%',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'

    },

    welcomeImageBox:{
        width:{xs:'100%',md:'40%'},
        height:{md:'80vh'},
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative',
        mt:{xs:4,md:0},
        gap:{xs:2,md:0}

    },
    wRightImage:{
        width:'90%',
        height:'47.5%',
        borderRadius:3,
        overflow:'hidden',
        boxShadow: {md:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}
    },
    welcomeImg:{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        borderRadius: {xs:12,md:0}
    }


}