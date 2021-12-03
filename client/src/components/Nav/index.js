import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Testimonials from "../../pages/Testimonials";
import Contact from "../../pages/Contact";
import "./style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function NavTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "auto" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#003366",
            fontFamily: "JetBrains Mono",
          }}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab className="navTabs" label="Home" {...a11yProps(0)} />
          <Tab className="navTabs" label="About" {...a11yProps(1)} />
          <Tab className="navTabs" label="Services" {...a11yProps(2)} />
          <Tab className="navTabs" label="Testimonials" {...a11yProps(3)} />
          <Tab className="navTabs" label="Contact" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Services />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Testimonials />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Contact />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
