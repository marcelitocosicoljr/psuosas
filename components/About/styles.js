import { greyColor, primaryColor, textColor } from "../../styles/Utility/colorTheme";

export const styles = {
    aboutCon:{
        width:{lg:'80%'},
        mx:'auto',
    },
    textBanner:{
        mx:'auto',
        my:5,
        textAlign:'center',
        display:'flex',
        justifyContent: 'center',
        flexDirection:'column',
        alignItems:'center',
        gap:2

    },
    titleBanner:{
        fontSize:{xs:'30px',md:'40px'},
        fontWeight:700,
        color:textColor,
    },
    captionBanner:{
        width:{xs:'90%',md:'70%',lg:'35%'},
        color:textColor
    },
    textImage:{
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        alignItems:'center',
        justifyContent:'space-between',
        mt:10,

    },

    imageFirst:{
        flexDirection:{xs:'column-reverse',md:'row'},
    },
    textLeft:{
        width:{xs:'100%', md:'50%'},
        pr:{md:3},
    },
    textRight:{
        width:{xs:'100%', md:'50%'},
        pl:{md:5},
    },
    titleLeft:{

        fontSize:{xs:'25px',md:'30px'},
        fontWeight:600,
        color:textColor,
        mb:2

    },
    captionLeft:{
        width:{xs:'90%'},
        color:textColor,
        fontSize:'18px'
    },
    imagesCon:{
        width:{xs:'100%',md:'50%'},
        position:'relative',
        height:{xs:'300px',md:'400px'},
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        my:{xs:4, md:0}
    },
    twoVerticalPic:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        width:'47%',
        height:'100%'
    },
    smallImg:{
        borderRadius:'15px',
        width:'100%',
        height: '48%',
        objectFit:'cover'
    },
    oneVerticalPic:{
        width:'50%',
        height:'100%'
    },
    regImg:{
        width:'100%',
        height: '100%',
        objectFit:'cover',
        borderRadius:'15px',
    },
    coreInfo:{
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        alignItems:'flex-start',
        gap:2,
        justifyContent:'center'
    },
    coreTitle:{
        color: primaryColor,
        fontWeight:600,
        wordSpacing:{md:'100000px'},
        width:{md:'320px'},
        textAlign:{md:'right'}
    },
    captionFullBanner:{
        width:{xs:'90%',md:'80%'},
        color:textColor
    },
    facultyCon:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:3,
        justifyContent:'center',
        alignItems:'center',
        maxWidth:'90%'
    },
    personCon:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width: '120px',
        position:'relative',


    },
    personImg:{
        width:'100%',
        objectFit:'cover',
        height:'120px',
        borderRadius:'10px',
        marginBottom:'5px'
    },
    pName:{
        color:primaryColor,
        fontWeight:600
    },
    pPosition:{
        color:greyColor,
        fontSize:'12px',
        fontWeight:500
    }







}