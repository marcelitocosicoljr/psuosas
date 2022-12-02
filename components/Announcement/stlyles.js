import { height } from "@mui/system";
import { greyColor } from "../../styles/Utility/colorTheme";

export const styles = {
    postCon:{
        borderRadius:'15px',
        width:{xs:'100%',md:'70%'},
        ml:'auto',
        mr:'auto'

    },
    postBox:{
        p:'15px',
        display:'flex',
        flexDirection:'column',
        gap:2,
        mt:2,
        boxShadow: 'rgba(149, 157, 165, .2) 0px 8px 24px',
        border:'solid 1px #E9E9E9',
        borderRadius:'8px'

    },
    profileCon:{
        display:'flex',
        flexDirection:'row',
        gap:1,
        alignItems: 'center',
    },
    logo:{
        width:'40px',
        height: '40px',
        objectFit:'cover',
        borderRadius:'50%'
    },
    nameCon:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
    },
    name:{
        fontSize:'14px',
        fontWeight:600,
    },
    subName:{
        fontSize:'10px',
        fontWeight:400,
        color:greyColor
    },
    postImageCon:{
        maxHeight:'500px',
        width:'100%',
        maxWidth:'100%',
        position:'relative',
        overflow:'hidden',
        objectFit: 'contain',
        objectPosition: 'top',
    },
    postImage:{
        width:'100%',
        height:'100%',
        position:'relative',
        objectFit: 'contain',
        objectPosition: 'top',
    },
    caption:{
        my:1,
        whiteSpace:'pre-line',
        maxWidth:{md:'90%'}
    },
    feedBackCon:{
        mb:1,
        display:'flex',
        flexDirection:'row',
        gap:1,
        alignItems:'center'
    },
    iconText:{
        display:'flex',
        flexDirection:'row',
        gap:1,
        alignItems:'center',

    },
    commentCon:{
        pb:1,
        display:'flex',
        flexDirection:'column',
        gap:1

    },
    commentNameCap:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
        p:'8px 12px',
        borderRadius:'15px',
        background:'#F0F2F5',
    },
    commentText:{
        fontSize:'14px',

    },
    profileComCon:{
        display:'flex',
        flexDirection:'row',
        gap:1,
        alignItems: 'center',

    },
    commentField:{
        borderTop:'solid 1px #F0F2F5',
        pt:2,

    },
    commentAcc:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        p:'5px 12px',
        borderRadius:'30px',
        background:'#F0F2F5',
        justifyContent:'space-between'
    },
    commentInput:{
        fontSize:'14px',
        border:'none',
        width:'90%',
        background:'transparent',
        outline:'none',
    },
    postFormCon:{
        width:'70%',
        bgcolor:'#fff',
        p:'10px',
        borderRadius:3,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        mx:'auto',
        mb:2,
        display:'flex',
        flexDirection:'column'
    },
    postFormBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    postTextField:{
        width:'100%',
        borderRadius:3,
        padding:'10px',
        outline:'none',
        fontSize:'14px',
        border:'solid 1px #D4D6D7'
    },
    postImageUpload:{
        maxHeight:'500px',
        width:'100%',
        maxWidth:'50%',
        position:'relative',
        overflow:'hidden',
        objectFit: 'contain',
        objectPosition: 'top',
        mt:2
    },
    postBtns:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        mt:1,
        gap:2
    }

}