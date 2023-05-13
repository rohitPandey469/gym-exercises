import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h6">
        Built with &#x2661; by <a href="#">Rohit Pandey</a>
        </Typography>
        <Typography variant="h6">
        My LinkedIn account  <a href="https://www.linkedin.com/in/rohit-pandey-2500b6215">Rohit Pandey</a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
