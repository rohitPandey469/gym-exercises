import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({
  data,
  bodyPart,
  setBodyPart,
  exercises,
  isBodyPart,
}) => {
  console.log(data);
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          sx={{
            width: "270px",
            display: "inline-block",
            // border:"2px solid green"
          }}
        >
          {isBodyPart ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              exercises={exercises}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
