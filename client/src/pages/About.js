import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import famImg from "../images/0FCFDFB3-A3B7-45FC-B7B4-43C3E8AA204C.JPG";

export default function About() {
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          width: "85%",
        }}
      >
        {" "}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item column>
            <img src={famImg} alt="Coconut Point Family" className="famPhoto" />
          </Grid>
          <Grid
            item
            column
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.75)",
              border: "2px solid black",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h6" style={{ margin: "4px" }}>
              Coconut Point Cooling was created after years of watching the
              struggle to maintain an adequate relationship between Client and
              Contractor as companies and projects grew. As the “Mom and Pop”
              business would grow, so would the distance between the people who
              were there for them along the way. On the same token, is the
              larger sales driven company that never knew their names to begin
              with and can't keep quality technicians around who may be the sole
              reason you’ve stayed. What motivates our team to wake up and come
              to work everyday is to prove this standard wrong. We can stay
              engaged and involved with our community no matter the size or the
              situation, it’s how we got here in the first place. We are also
              here to shake up the norm of how you access the things you need
              most in your HVAC applications. Too long has the model not changed
              and we believe that making products more available to the ‘do-it
              yourselfers’ or our customers who have become accustomed to how we
              can all “buy it now” can and will transform the industry around
              us. Most important to us, is ensuring a higher quality of life
              that can sometimes be taken for granted. Our company was born
              during a time where maybe some of us had to become acutely aware
              that the world around us is changing. Applying firmer steps to
              make sure we are taking care of ourselves has become paramount in
              day to day decisions, and our family wants to be involved in
              helping yours. The buildings we spend so much of our lives in
              usually contain the things that matter most. Indoor air quality is
              our specialty and just one way we can use our business to better
              our community.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
