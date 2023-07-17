import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { Rating } from "react-simple-star-rating";
import { MdLocalGroceryStore } from "react-icons/md";
import BevMoArray from "./BevMoArray";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

const BevMo = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  // const onPointerEnter = () => console.log("Enter");
  // const onPointerLeave = () => console.log("Leave");
  // const onPointerMove = (value, index) => console.log(value, index);
  const theme = useTheme();
  return (
    <>
      <Box mt={4}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                background: theme.typography.textColor4,
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: { md: "36px", sm: "25px", xs: "16px" },
                fontWeight: 700,
                fontFamily: "Prompt",
              }}
            >
              FSA & HSA Eligible
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "relative",
                gap: 2,
                // right:{md:"6%", sm:"8%", xs:"11%"},
                // paddingTop:{md:"auto", sm:"auto", xs:"3.5rem"}
              }}
            >
              <IoIosArrowBack
                className="pr"
                style={{
                  background: theme.primary.SwiperBtnBgColor,
                  border: "1px solid #01C5BA",
                  width: "42px",
                  height: "42px",
                  // borderRadius: "6px",
                  cursor: "pointer",
                  padding: "11px",
                  color: theme.primary.SwiperbtnColor,
                }}
              />
              <IoIosArrowForward
                className="nx"
                style={{
                  background: theme.primary.SwiperBtnBgColor,
                  border: "1px solid #01C5BA",
                  color: theme.primary.SwiperbtnColor,
                  width: "42px",
                  height: "42px",
                  // borderRadius: "6px",
                  cursor: "pointer",
                  padding: "11px",
                  // top:"90%",
                }}
              />
            </Box>
          </Box>

          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              615: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              1224: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
            loop={true}
            autoplay={true}
            loopFillGroupWithBlank={true}
            navigation={{
              nextEl: ".nx",
              prevEl: ".pr",
            }}
            modules={[Navigation]}
          >
            {BevMoArray.map((item) => {
              return (
                <SwiperSlide key={item}>
                  <Box
                    sx={{
                      background: theme.primary.BevMoBgColor,
                      border: "1px solid",
                      borderColor: theme.primary.BevMoBorderColor,
                    }}
                  >
                    <img src={item.Img} width="100%" alt="" />
                    <Typography
                      sx={{
                        fontSize: "10px",
                        fontWeight: 400,
                        fontFamily: "Epilogue",
                        padding: "0px 1.1rem",
                        textAlign: "left",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        justifyContent: "start-felx",
                        paddingLeft: "1rem",
                      }}
                    >
                      <Rating
                        onClick={handleRating}
                        // onPointerEnter={onPointerEnter}
                        // onPointerLeave={onPointerLeave}
                        // onPointerMove={onPointerMove}
                        size={12}
                        emptyColor="#FF7A00"
                      />

                      <Typography
                        sx={{
                          fontSize: "8px",
                          fontWeight: 400,
                          fontFamily: "Inter",
                        }}
                      >
                        {item.rating}
                      </Typography>
                    </Box>
                    <Divider variant="middle" />
                    <Box
                      m={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#E91E63",
                          fontSize: "11px",
                          fontWeight: 700,
                        }}
                      >
                        {item.price}
                      </Typography>
                      <MdLocalGroceryStore
                        style={{
                          color: "#01C5BA",
                        }}
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </Box>
    </>
  );
};

export default BevMo;
