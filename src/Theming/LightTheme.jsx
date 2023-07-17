import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },

  primary: {
    navbgColor: "#01C5BA",
    CategorybgColor: "#FFFFFF",
    selectColor: "#FFFFFF",
    inputbhColor: "#31d0c7",
    inputBorderColor: "#858080",
    inputSrchIconBgColor: "#58d9d2",
    sideBarBg: "#DDDDDD",
    boxBgColor: "#FFFFFF",
    boxTextColor: "#000000",
    boxsubTextColor: "#7D848B",
    homebtnBgColor: "#2196F3",
    homebtnColor: "#2196F3",
    FindLinkColor: "#000000",
    findFontsize: "24px",
    storeBgColor: "#000000",
    bestSellerBgColor: "#FFFFFF",
    sellerBorderColor: "#FFFFFF",
    sideBar2Bg: "#DDDDDD",
    sideBar2Bgone: "#01C5BA",
    BevMoBgColor: "#FFFFFF",
    BevMoBorderColor: "#FFFFFF",
    SwiperBtnBgColor: "#FFFFFF",
    SwiperbtnColor: "#01C5BA",
  },
  typography: {
    textColor1: "#000000",
    textColor2: "#7D848B",
    textColor3: "#E91E63",
    textColor4: "#000000",
    textColor5: "#E91E63",
  },
});

export default responsiveFontSizes(theme);
