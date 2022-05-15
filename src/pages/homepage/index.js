import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
// import Cards from "../../components/card/index";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addToFavourite } from "../../features/countrySlicer";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.products);

  console.log(country, "rehan");

  return (
    <Box className={classes.homepage}>
      {/* <Cards /> */}
      {country ? (
        <div className={classes.homepage}>
          {country.slice(0, 20).map((item) => {
            return (
              <Card className={classes.root}>
                <img src={item.flags.png} alt="" />
                <CardContent>
                  <Typography
                    className={classes.para}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.name.official}
                  </Typography>
                  <Typography
                    className={classes.para}
                    variant="body2"
                    color="textPrimary"
                    component="p"
                  >
                    population:{item.population}
                  </Typography>
                  <Typography
                    className={classes.para}
                    variant="body2"
                    color="textPrimary"
                    component="p"
                  >
                    region:{item.region}
                  </Typography>
                  <Typography
                    className={classes.para}
                    variant="body2"
                    color="textPrimary"
                    component="p"
                  >
                    capital:{item.capital}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    aria-label="add to favorites"
                    onClick={() => {
                      dispatch(addToFavourite(item));
                    }}
                  >
                    <FavoriteIcon className={classes.para} />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </Box>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.backgroundColor.primary,
  },
  homepage: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: theme.palette.backgroundColor.main,
  },
  para: {
    color: theme.palette.color.main,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
