import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette:{
        mode:"dark",
    },
    
    primary:{
        navbgColor:"#1E1E1E",
        CategorybgColor:"#1E1E1E",
        selectColor:"#343E48",
        inputbhColor:"#1E1E1E",
        inputBorderColor:"#858080",
        inputColor:"#F6F4F4",
        inputSrchIconBgColor:"transparent",
        sideBarBg:"#1E1E1E",
        boxBgColor:"#1E1E1E",
        boxTextColor:"#FFFFFF",
        boxsubTextColor:"#01C5BA",
        homebtnBgColor:"#01C5BA",
        homebtnColor:"#FFFFFF",
        FindLinkColor:"#01C5BA",
        findFontsize:"40px",
        storeBgColor:"linear-gradient(89.92deg, #016DB0 1.29%, #01FFCA 99.94%)",
        bestSellerBgColor:"#1e1e1e",
        sellerBorderColor:"#343E48",
        sideBar2Bg:"#121212",
        sideBar2Bgone:"#01C5BA",
        BevMoBgColor:"#1E1E1E",
        BevMoBorderColor:"#343E48",
        SwiperBtnBgColor:"#1E1E1E",
        SwiperbtnColor:"#FFFFFF"










    },
    typography:{
        textColor1:"#FFFFFF",
        textColor2:"#FFFFFF",
        textColor3:"#01C5BA",
        textColor4:"linear-gradient(59.92deg, #016DB0 1%, #01FFCA 100%)",
        textColor5:"#E91E63"
       },

       
    
    
    
})

export default responsiveFontSizes(theme)