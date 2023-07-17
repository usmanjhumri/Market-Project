import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  List,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavBar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import { useTheme } from "@emotion/react";
import IMG from "./images/Ellipse 2.png";
import { GoArchive } from "react-icons/go";
import { SideBarArray2, SidebarArray3 } from "./SidebarArray2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MyAccord from "../SideBar2Accordian/myAccordian";

const SideBar2 = ({ childComponent }) => {
  const theme = useTheme();

  const [openSubMenu, setopenSubMenu] = useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box>
        <NavBar />
        <Grid container>
          <Grid item xs={5} md={2}>
            <Box
              className="sidebar"
              sx={{
                borderTop: "none",
                background: theme.primary.sideBar2Bg,
                borderRight: "1px solid rgba(200, 200, 200, 0.39)",
                borderLeft: "1px solid rgba(200, 200, 200, 0.39)",
                borderBottom: "1px solid rgba(200, 200, 200, 0.39)",
              }}
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
          </Grid>

          <Grid item xs={7} md={9}>
            {childComponent}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SideBar2;
