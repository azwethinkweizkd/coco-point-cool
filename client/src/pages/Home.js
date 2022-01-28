import React from "react";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import CocoPointCoolIcon from "../utils/logo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSnowflake } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
          height: "75vh",
          width: "auto",
          overflow: "hidden",
        }}
      >
        <CocoPointCoolIcon />
      </Box>
      <Footer />
    </>
  );
}
