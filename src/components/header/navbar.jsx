import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";
import { toggleAction } from "../../features/countrySlicer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [mode, setMode] = useState(false);
  const dispatch = useDispatch();
  const handleChange = () => {
    setMode(!mode);
    dispatch(toggleAction(mode));
  };

  const classes = useStyles();

  return (
    <>
      <Box className={classes.head}>
        <Box className={classes.navbar}>
          <Box className={classes.logo}>
            <Link to="./" className={classes.link}>
              <Typography variant="h1">Where in the world?</Typography>
            </Link>
          </Box>
          <Link className={classes.link} to={"/fav"}>
            fav
          </Link>
          <Box className={classes.right_nav}>
            <Switch onClick={handleChange} />
            <Typography variant="h2">Dark mode</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  head: {
    color: theme.palette.color.main,
    backgroundColor: theme.palette.backgroundColor.main,
  },
  link: {
    color: theme.palette.color.main,
    textDecoration: "none",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    paddingLeft: 30,
  },
  right_nav: {
    display: "flex",
    alignItems: "center",
    paddingRight: 30,
    justifyContent: "space-between",
  },
}));
