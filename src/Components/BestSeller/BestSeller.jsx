import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import IMG from "./images/Ellipse 2.png";
import BestSellerArray from "./BestSellerArray";
import { json, Link } from "react-router-dom";

const BestSeller = () => {
  const [data, setData] = useState(BestSellerArray);
  const theme = useTheme();
  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth + "klasjflaj")
      let value = JSON.parse(JSON.stringify(BestSellerArray));

      const temp = [];

      value.filter((a, i) => {
        console.log(a + "aA");
        if (i < 2) {
          temp.push(a);
        }
      });
      if (window.innerWidth < 600) {
        value = value.splice(0, 2);
        console.log(value + "values");
        setData(temp);
      } else {
        setData(BestSellerArray);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

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
                fontSize: theme.primary.findFontsize,
                textTransform: "uppercase",
              }}
            >
              Best Seller
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
            {data &&
              data.map((item, ind) => {
                return (
                  <>
                    <Grid item xs={12} sm={6} md={3} key={ind} sx={{ gap: 3 }}>
                      <Box
                        sx={{
                          background: theme.primary.bestSellerBgColor,
                          borderColor: theme.primary.sellerBorderColor,
                          borderRadius: "10px",
                          boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)",
                          margin: "0.3rem",
                          // width: "236px",
                          height: "93px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={item.Img}
                          style={{ width: "65%", marginLeft: "-0.4rem" }}
                          alt=""
                        />

                        <Box sx={{ margin: "auto", marginLeft: "-2.4rem" }}>
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 700,
                              color: theme.typography.textColor1,
                            }}
                          >
                            {item.text1}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: 400,
                              color: theme.typography.textColor2,
                            }}
                          >
                            {item.text2}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "10px",
                              fontWeight: 400,
                              color: theme.typography.textColor3,
                            }}
                          >
                            {item.text3}
                          </Typography>
                        </Box>
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

export default BestSeller;
