import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FindStorArray from "./FindstorArray";
import IMG from "./images/Rectangle1.png";
const FindStore = () => {
  const theme = useTheme();
  return (
    <>
      <Box mt={10} mb={10}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                background:
                  "linear-gradient(89.92deg, #016DB0 1.29%, #01FFCA 99.94%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Prompt",
                fontWeight: 700,
                fontSize: {md:theme.primary.findFontsize, sm:"20px", xs:"14px"},
                textTransform: "uppercase",
              }}
            >
              Find store near to You
            </Typography>

            <Typography>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: theme.primary.FindLinkColor,
                }}
              >
                View All {""} &#8594;
              </Link>
            </Typography>
          </Box>
          <Grid container>
            {FindStorArray.map((item, ind) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    key={ind}
                    sx={{ margin: {md:"0px 0.6rem", sm:"0px", xs:"0px"} }}
                  >
                    <Box>
                      <img src={item.IMG} style={{ 
                        width: "100%"
                     }} alt="" />

                      <Typography
                        sx={{
                          fontSize: "14px",
                          textAlign: "center",
                          color:"#01C5BA"
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FindStore;
