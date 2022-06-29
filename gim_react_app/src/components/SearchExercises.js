import React from "react";

import { Box, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack direction={"column"} marginTop={{xs:5,md:10,lg:0}}>
      <Typography textAlign={"center"} variant={"h4"}  fontWeight={600}>
        Awesone Exercises <br /> You Should Know
      </Typography>

      <Box px={20}>

        <TextField>

        </TextField>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
