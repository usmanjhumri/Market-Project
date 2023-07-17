import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Drawer,
  IconButton,
  TextField,
  MenuItem,
  Select,
  Typography,
  Switch,
  Badge,
  Accordion,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { MdDarkMode } from 'react-icons/md'
import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext, useTheme } from "@emotion/react";
import { MdOutlineKeyboardArrowRight, MdSearch } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ThemeChkr } from "../../App";
import { SidebarArray3 } from "./SidebarArray2";
import MyAccord from "../SideBar2Accordian/myAccordian";
import { BsSunFill } from 'react-icons/bs'

function NavBar() {


  const { getTheme } = useContext(ThemeChkr);
  const themeone = useTheme();
  console.log(themeone.bgColor);

  const handleChnage = (e) => {
    getTheme(e.target.checked);
  };

  const [themeicon, setThemeicon] = useState(false)

  useEffect(() => {
    getTheme(themeicon)
  }, [themeicon])


  const badgeStyle = {
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "#E91E63",
    },
  };
  const [state, setState] = useState(false);
  const theme = useTheme();
  const [catgry, setCatgry] = useState("");
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  const list = () => (
    <>
      <Box
        className="sidebar"
        sx={{
          width: 350,
          background: theme.primary.sideBar2Bg,
        }}
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
      >
        {SidebarArray3.map((item) => {
          return (
            <>
              <Accordion
                sx={{
                  background: theme.primary.sideBar2Bg,
                }}
              >
                <AccordionSummary
                  expandIcon={<MdOutlineKeyboardArrowRight />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 400,
                        paddingLeft: "3.3rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </AccordionSummary>

                <MyAccord />
              </Accordion>

              <Divider
                sx={{
                  background: "rgba(200, 200, 200, 0.39)",
                }}
              />
            </>
          );
        })}
      </Box>
    </>
  );
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.primary.navbgColor,
          pt: { xs: 1, sm: 0, md: 0 },
          pb: { xs: 2, sm: 0, md: 0 },
          // pl:{xs:2, md:0, sm:"2re, xl:"24rem"}
        }}
        elevation={0}
      >
        <Container>
          <Toolbar>
            <Box
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography sx={{ forntWeight: "900" }}>Logo Here</Typography>
              <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                <Select
                  id="catgry"
                  fullWidth
                  displayEmpty
                  required
                  value={catgry}
                  sx={{
                    width: { sm: "150px", md: "250px" },
                    background: theme.primary.selectColor,
                    height: "40px",
                  }}
                  disabled
                >
                  {" "}
                  <MenuItem value="" disabled sx={{ display: "none" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <AiOutlineAppstore />
                      <Typography variant="body1" ml={1} fontSize="12px">
                        All Catagories
                      </Typography>
                    </Box>
                  </MenuItem>
                </Select>
              </Box>
              <Box sx={{ overflow: "hidden" }}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    background: theme.primary.inputbhColor,
                    border: "1px solid",
                    borderColor: theme.primary.inputBorderColor,
                    width: { sm: "150px", md: "380px" },
                    "& fieldset": { border: "none" },
                    input: {
                      color: "#F6F4F4",
                    },
                    borderRadius: 2,
                  }}
                  placeholder="Search here"
                  InputProps={{
                    endAdornment: (
                      <MdSearch
                        size="2.5rem"
                        style={{
                          color: "#fff",
                          background: theme.primary.inputSrchIconBgColor,
                          border: "none",
                          width: 65,
                          position: "absolute",
                          right: 0,
                          top: 0,
                          bottom: 0,
                          borderRadius: "0 7px 7px 0px",
                          cursor: "pointer",
                        }}
                      />
                    ),
                  }}
                />
              </Box>

              <IconButton onClick={() => setThemeicon(!themeicon)}>
                {themeicon ? <MdDarkMode /> : <BsSunFill color="#FFE600" />}
              </IconButton>







              <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                <IconButton>
                  <LogoutIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                <IconButton aria-label="cart">
                  <Badge badgeContent={2} sx={badgeStyle}>
                    <FaShoppingCart style={{ color: "#fff" }} />
                  </Badge>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                <Typography fontSize="8px">Total</Typography>
                <Typography
                  variant="body2"
                  fontSize="10px"
                  sx={{
                    //  color: theme.textColor.navBody1,
                    fontWeight: "700",
                  }}
                >
                  $2000
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none", md: "none" },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ forntWeight: "900" }} mr={2}>
                    Logo Here
                  </Typography>
                  {/* <Toogle /> */}
                </Box>
                <Switch sx={{ textAlign: "center" }} onChange={handleChnage} />

                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={state}
                  onClose={toggleDrawer(false)}
                  sx={{ display: { xs: "flex", md: "none" } }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  {list()}
                </Drawer>
              </Box>

              <Box
                sx={{
                  overflow: "hidden",
                  width: "100%",
                  margin: "auto",
                  mt: 1,
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    background: "transparent",
                    border: "1px solid white",

                    "& fieldset": { border: "none" },
                    input: {
                      color: "white",
                    },
                    borderRadius: 2,
                  }}
                  placeholder="Search here"
                  InputProps={{
                    endAdornment: <SearchIcon sx={{ color: "#fff" }} />,
                  }}
                />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;

// import React, { useEffect, useState } from 'react'
// import { Box, Container, FormControl, Grid,  MenuItem, Select, Switch,  } from '@mui/material'
// import CssBaseline from '@mui/material/CssBaseline';
// import {AiOutlineAppstore} from 'react-icons/ai'
// import { useContext } from 'react';
// import { ThemeChkr } from '../../App';
// import { useTheme } from '@emotion/react';

// const Navbar = () => {
//   const {getTheme} = useContext(ThemeChkr)
//   const theme= useTheme()
//   console.log(theme.bgColor);

// const handleChangeTheme=(e)=>{
//   getTheme(e.target.checked)
// }

//   return (
//     <>
//     <Box bgcolor={theme.bgColor.navBgColor} sx={{padding:"1rem"}}>
//       <CssBaseline/>
//         <Container>
//             <Grid container>

//                 <Box sx={{ gap:4, display:"flex"}}>
//                     <Box sx={{flexGrow:1, margin:"auto" }}>
//                         Logo Here
//                     </Box>

//                     <Box sx={{
//                         display:"flex"
//                     }}>
//                         <Box>
//                         <FormControl fullWidth>
//         <Select
//         sx={{width:250,
//         background:"white",
//         border:"none"
//         }}
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={10}

//         >
//           <MenuItem value={10}> <AiOutlineAppstore/> All Categories</MenuItem>

//         </Select>
//       </FormControl>
//                    </Box>
//                   <Switch
//                   onChange={handleChangeTheme}
//                   />
//                     </Box>

//                 </Box>

//             </Grid>

//         </Container>
//     </Box>
//     </>
//   )
// }

// export default Navbar
