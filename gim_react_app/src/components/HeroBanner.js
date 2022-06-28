import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import Banner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      position="relative"
    >
      {/** CONTENT BANNER */}

      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "50px" },
        }}
      >
        <Typography color="#FF2625" fontSize={25} fontWeight={600}>
          Fitnees Club
        </Typography>

        <Typography fontSize={40} sx={{ maxWidth: "300px" }} fontWeight={600}>
          Sweat, Smile And Repeat
        </Typography>

        <Typography fontSize={20} fontWeight={100} marginY={5}>
          Check out the most effective exercises personalized to you
        </Typography>
      </Box>

      <Box position={"absolute"} top={-85} right={-10}  sx={{display:{lg:"block",xs:"none"}}} >
        <img src={Banner} alt="banner" />
      </Box>
    </Stack>
  );
};

export default HeroBanner;
