import { bodyColor, primaryColor, textColor } from "../../../styles/Utility/colorTheme";

export const styles = {
    buttonUI:{
        textTransform: 'capitalize',
        fontWeight:500,
        fontSize:'14px',
        fontFamily: 'DM Sans',
        px:'30px',
        width:'max-content',

    },
    primaryButton:{
        bgcolor: primaryColor,
        color: bodyColor,
        width:'max-content',
        py:1,
        borderRadius:2
    },
    secondaryButton:{
        borderWidth:'1px',
        borderColor:primaryColor,
        color: primaryColor,
        width:'max-content',
        py:.8,
        borderRadius:2
    },
    textButton:{
        color: textColor,
        width:'max-content',
        py:.8,
        borderRadius:2
    },
    buttonUI:{
        textTransform: 'capitalize',
        fontWeight:500,
        fontSize:'14px',
        fontFamily: 'DM Sans',
        px:'30px',
        width:'max-content',

    },
}