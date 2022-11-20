import { textColor } from "../../styles/Utility/colorTheme";

export const styles = {
    heroBox:{
        width:'100%',
        borderRadius:'15px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        bgcolor:'grey',
        height: {xs:'150px',md:'250px'},
        ml:'auto',
        mr:'auto',
        mt:2,
        position:'relative',
        overflow:'hidden',
        boxShadow: 'rgba(149, 157, 165, .1) 0px 8px 24px',
        mb:2

    },
    heroTitle:{
        bgcolor:'rgb(255,255,255, .7)',
        color: textColor,
        padding: {xs:'5px 10px',md:'7px 60px'},
        borderRadius:1,
        fontWeight:600,
        fontSize: {xs:'24px',md:'28px'},
        zIndex:1
    },
    heroImage:{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:'0px',
        left:'0px',
        objectFit:'cover'
    }
}