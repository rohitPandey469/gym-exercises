import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Stack
      sx={{
        mt: { lg: "100px", xs: "0" },
      }}
    >
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Box
        sx={{
          positon: "relative",
          width: "100%",
          padding: "20px",
          mb:{xs:"0",lg:"80px"}
        }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Box>

      {/* Now for equipment exercises---> */}


      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Box
        sx={{
          positon: "relative",
          width: "100%",
          padding: "20px"
        }}
      >
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Box>
    </Stack>
  );
};

export default SimilarExercises;
