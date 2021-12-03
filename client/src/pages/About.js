import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { LoremIpsum } from "react-lorem-ipsum";

export default function About() {
  return (
    <main>
      <Box>
        {" "}
        <Typography variant="h1">About</Typography>
        <LoremIpsum p={2} />
      </Box>
    </main>
  );
}
