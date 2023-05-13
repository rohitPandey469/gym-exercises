import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box overflow="none">
      <Box
        sx={{
          mt: { lg: "212px", xs: "70px" },
          ml: { sm: "50px" },
          position: "relative",
          p: "20px",
        }}
      >
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography
          fontWeight="700"
          sx={{
            fontSize: { lg: "44px", xs: "40px" },
            mb: "23px",
            mt: "30px",
          }}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb="2.8px">
          Check out the most effective exercises
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{
            backgroundColor: "#ff2625",
            mt: "25px",
            padding: "20px",
          }}
        >
          Explore Exercises
        </Button>
        <Typography
          fontWeight={600}
          color="#ff2625"
          sx={{
            opacity: "0.1",
            display: { lg: "block", xs: "none" },
            mt: { md: "0px" },
          }}
          fontSize="200px"
        >
          Exercise
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: { lg: "1", xs: "-1" },
          right: { xs: 0, xl: "7%" },
          top: 0,
          display: { xs:"none",sm: "block" },
          paddingRight: { sm: "50px" },
        }}
      >
        <img
          src={HeroBannerImage}
          alt=""
          style={{
            width: { xs: "100%" },
            height: "110vh",
            height: { lg: "100%" },
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroBanner;
