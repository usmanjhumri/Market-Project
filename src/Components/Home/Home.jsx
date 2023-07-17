import React from "react";
import { useTheme } from "@emotion/react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AvatarImg from "./HomeArray";
import Img2 from "./avatarImg/Ellipse2.png";
const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Box mt={5} mb={10}>
        <Container>
          <Grid container spacing={1}>
            {AvatarImg.map((item, ind) => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={4} key={ind} sx={{}}>
                    <Box
                      sx={{
                        background: theme.primary.boxBgColor,

                        boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)",
                        borderRadius: "10px",
                        display: "flex",

                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                        height: { md: "94%", sm: "93%", xs: "93%" },
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "20px",
                            color: theme.primary.boxTextColor,
                            // paddingTop: "1rem",
                            marginLeft: "1rem",
                          }}
                        >
                          Grocery
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "10.3px",
                            fontWeight: 400,
                            color: theme.primary.boxsubTextColor,

                            paddingLeft: "1rem",
                          }}
                        >
                          Free Delivery with instacart+
                        </Typography>

                        <AvatarGroup max={4} sx={{ margin: "0px 0.2rem" }}>
                          <Avatar alt="Remy Sharp">
                            {" "}
                            <img src={Img2} alt="" />{" "}
                          </Avatar>
                          <Avatar alt="Remy Sharp">
                            {" "}
                            <img src={Img2} alt="" />{" "}
                          </Avatar>
                          <Avatar alt="Remy Sharp">
                            {" "}
                            <img src={Img2} alt="" />{" "}
                          </Avatar>
                          <Avatar alt="Remy Sharp">
                            {" "}
                            <img src={Img2} alt="" />{" "}
                          </Avatar>
                          <Avatar alt="Remy Sharp">
                            {" "}
                            <img src={Img2} alt="" />{" "}
                          </Avatar>
                        </AvatarGroup>
                      </Box>

                      <Box>
                        <img
                          src={item.IMG}
                          style={{
                            width: "100%",
                            overflow: "hidden",
                            // height: "9%",
                            marginTop: "0.3rem",
                          }}
                          alt=""
                        />
                      </Box>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Box mt={4} mb={6} sx={{ textAlign: "center" }}>
            <Button
              sx={{
                width: "173px",
                height: "39px",
                border: "1px solid",
                borderColor: theme.primary.homebtnBgColor,
                textTransform: "capitalize",
                color: theme.primary.homebtnColor,
              }}
            >
              show all
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
