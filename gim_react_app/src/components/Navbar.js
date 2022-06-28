import React from "react";

import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo Gim App "
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>

      <Stack alignItems={"flex-end"} direction="row" gap="40px">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "1px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
