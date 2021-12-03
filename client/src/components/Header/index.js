import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import companyLogo from "../../images/cocoPointCoolingBlack.jpg";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CenteredListItemText = withStyles({
  root: {
    textAlign: "center",
  },
})(ListItemText);

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="space-between">
        <img src={companyLogo} className="logo" alt="Coconut Point Cooling" />

        <Grid item xs={12} sm={6} md={6} lg={3} className={classes.root}>
          <Typography variant="h6" component="div" textAlign="center">
            Hours of Operation
          </Typography>

          <List container>
            <ListItem>
              <CenteredListItemText
                primary="Mon - Fri"
                sx={{ maxWidth: "50%" }}
              />
              <CenteredListItemText
                primary="8AM - 5PM"
                sx={{ maxWidth: "50%" }}
              />
            </ListItem>
            <ListItem>
              <CenteredListItemText
                primary="Saturday"
                sx={{ maxWidth: "50%" }}
              />
              <CenteredListItemText
                primary="8AM - 3PM"
                sx={{ maxWidth: "50%" }}
              />
            </ListItem>
            <ListItem>
              <CenteredListItemText primary="Sunday" sx={{ maxWidth: "50%" }} />
              <CenteredListItemText primary="Closed" sx={{ maxWidth: "50%" }} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
