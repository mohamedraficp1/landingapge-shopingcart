import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function TextRating({ value, count }) {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "left",
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        icon={<StarIcon style={{ fontSize: "15px" }} />}
        emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: "15px" }} />}
      />
      <Box sx={{ ml: 1, fontWeight: "600", fontSize: "11px" }}>({count})</Box>
    </Box>
  );
}
