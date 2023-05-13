import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise, key=0 }) => {
  return (
    <Stack>
    <Link
      style={{ width: "320px" ,height:"450px"}}
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            marginLeft: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            marginLeft: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        mt="11px"
        fontWeight="bold"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {exercise.name}
      </Typography>
    </Link>
    </Stack>
  );
};

export default ExerciseCard;
