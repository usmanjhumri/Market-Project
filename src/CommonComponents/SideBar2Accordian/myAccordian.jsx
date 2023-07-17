import { useTheme } from "@emotion/react";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { GoArchive } from "react-icons/go";
import { Link } from "react-router-dom";
import { SideBarArray2 } from "../SideBar/SidebarArray2";
import IMG from "./image/Ellipse.png";
const MyAccord = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Link style={{ textDecoration: "none" }} to="./">
          <Box>
            <img src={IMG} style={{ width: "100%" }} alt="" />

            <Box
              sx={{
                textAlign: "center",
                marginTop: {
                  md: "-4rem",
                  xs: "0px",
                  sm: "0px",
                  xl: "-2rem",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: theme.typography.textColor1,
                }}
              >
                BevMo!
              </Typography>

              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: theme.typography.textColor1,
                  width: "152px",
                  marginBottom: "2.6rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: "11.27px",
                }}
              >
                100% satisfaction guarantee Earn with Safeway for U™
              </Typography>
            </Box>
          </Box>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: theme.primary.sideBar2Bgone,
          padding: "0.6rem 0px",
          gap: 1,
        }}
      >
        <GoArchive style={{ color: "#FFFFFF" }} />
        <Typography
          sx={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 700 }}
        >
          Shop
        </Typography>
      </Box>

      <Divider
        sx={{
          background: "rgba(200, 200, 200, 0.39)",
        }}
      />

      {SideBarArray2.map((item) => {
        return (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: theme.primary.sideBarBg,
                padding: "0.6rem 0px",
                gap: 1,
                paddingLeft: { md: "5.1rem", sm: "5rem", xs: "4.5rem" },
              }}
            >
              <GoArchive />
              <Typography sx={{ fontSize: "12px", fontWeight: 700 }}>
                {item.text1}
              </Typography>
            </Box>

            <Divider
              sx={{
                background: "rgba(200, 200, 200, 0.39)",
              }}
            />
          </>
        );
      })}
    </>
  );
};

export default MyAccord;
