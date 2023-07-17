import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  TextField,
  MenuItem,
  Select,
  Typography,
  Switch,
  Badge,
  
} from "@mui/material";


import { useState } from "react";
import {AiOutlineAppstore} from 'react-icons/ai' 
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext, useTheme } from "@emotion/react";
import {MdSearch} from 'react-icons/md'
import {CgSun} from 'react-icons/cg'
import {FaShoppingCart} from 'react-icons/fa'
import MailIcon from '@mui/icons-material/Mail';
import DarkTheme from "../../Theming/DarkTheme";
import LightTheme from "../../Theming/LightTheme";
import { ThemeChkr } from "../../App";
const pages = ["Home", "Menu", "About", "Contact"];



function NavBar() {


  const {getTheme} = useContext(ThemeChkr)
 const themeone = useTheme()
 console.log(themeone.bgColor);

const handleChnage = (e) =>{
    getTheme(e.target.checked)

  console.log(isCurentDark);
}

  const badgeStyle = {
    "& .MuiBadge-badge": {
      color: 'white',
      backgroundColor: '#E91E63',
    }
  }

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
    <Box
      sx={{
        width: 350,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        sx={{
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        {pages.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
             
              sx={{
                textAlign: "center",
                "&:hover": {
                  color: "green",
                  bgcolor: "transparent",
                },
              }}
            >
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.primary.navbgColor,
          pt: { xs: 1, sm: 0, md: 0 },
          pb: { xs: 2, sm: 0, md: 0 },
        }}
        elevation={0}
      >
        <Container p={0}>
          <Toolbar>
            <Box
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography  sx={{ forntWeight: "900" }}>
                Logo Here
              </Typography>



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
                    // color: theme.textColor.selectColor,
                    height: "40px",
                  }}
                  disabled
                >
                  {" "}
                  <MenuItem value="" disabled sx={{ display: "none" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <AiOutlineAppstore/>
                      <Typography variant="body1" ml={1} fontSize="12px">
                        All Catagories
                      </Typography>
                    </Box>
                  </MenuItem>
                </Select>
              </Box>

              <Box sx={{ overflow: "hidden", ml: 2, mr: 2 }}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    background: theme.primary.inputbhColor,
                    border: "1px solid",
                    borderColor:theme.primary.inputBorderColor,
                    width: { sm: "150px", md: "380px" },
                    "& fieldset": { border: "none" },
                    input: {
                      color: "#F6F4F4",
                    },
                    borderRadius: 2,

                  }}
                  placeholder="Search here"
                  InputProps={{
                    endAdornment: <MdSearch size='2.5rem' style={{ color: "#fff", background:"#58d9d2", border:"none",  width:65, position:"absolute", right:0, top:0, bottom:0, borderRadius:"0 7px 7px 0px", cursor:"pointer" }} />,
                  }}
                />
              </Box>

            <Switch onChange={handleChnage}
            // checked={theme === 'light'}
            />
            <CgSun color="#FFE600" size='1.6rem'/>

              <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                <IconButton>
                  <LogoutIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Box>


              <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                <IconButton aria-label="cart">
                   <Badge badgeContent={2}  sx={badgeStyle}>

                    <FaShoppingCart style={{ color: "#fff" }} />

                  </Badge> 

                  
                </IconButton>
              </Box>


              <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                <Typography  fontSize="8px">
                  Total
                </Typography>
                <Typography
                  variant="body2"
                  fontSize="10px"
                  sx={{
                    //  color: theme.textColor.navBody1,
                     fontWeight: "700" }}
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
                  <Typography
                    
                    sx={{ forntWeight: "900" }}
                    mr={2}
                  >
                    Logo Here
                  </Typography>
                  {/* <Toogle /> */}
                </Box>
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
