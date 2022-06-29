import React from "react";

import { Box, Stack, Typography,Button } from "@mui/material";

import Banner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Stack direction={"row"} justifyContent="space-between" position="relative">
      {/** CONTENT BANNER */}

      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "50px", xs: "20px" },
        }}
      >
        <Typography
          color="#FF2625"
          fontSize={{ md: 25, xs: 20 }}
          fontWeight={600}
        >
          Fitnees Club
        </Typography>

        <Typography
          fontSize={{ md: 40, xs: 30 }}
          sx={{ maxWidth: "300px" }}
          fontWeight={600}
        >
          Sweat, Smile And Repeat
        </Typography>

        <Typography fontSize={20} fontWeight={100} marginY={{ md: 5, xs: 2 }}>
          Check out the most effective exercises personalized to you
        </Typography>
        <Button size={"large"} variant="contained" color="error" href="#exercises">
          Explore Exercises
        </Button>
        <Typography marginY={20} fontSize={115} color="#ff2625"  sx={{
          opacity:0.1,
          fontWeight:600,
          display:{
            lg:"block",
            md:"none",
            xs:"none",
          }
        }}>
        EXERCISES
      </Typography>
      </Box>
  
      <Box
        position={"absolute"}
        top={-85}

        right={-10}
        sx={{ display: { lg: "block", xs: "none" } }}
      >
        <img src={Banner} alt="banner" />
      </Box>

     
    </Stack>
  );
};

export default HeroBanner;
