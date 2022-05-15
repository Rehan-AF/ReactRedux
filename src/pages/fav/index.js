import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const Fav = () => {
  const FavData = useSelector((state) => state.favouriteData);
  console.log(FavData, "favvv");
  const classes = useStyles();
  return (
    <div className={classes.favContainer}>
      {FavData.map((item) => {
        return (
          <div>
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
              <CardActions disableSpacing></CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Fav;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.backgroundColor.primary,
  },
  link: {
    color: theme.palette.color.main,
    textDecoration: "none",
  },
  favContainer: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: theme.palette.backgroundColor.main,
    height: "100vh",
  },
  para: {
    color: theme.palette.color.main,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
