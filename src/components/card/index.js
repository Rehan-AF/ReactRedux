import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Cards({
  countryName,
  population,
  region,
  capital,
  flag,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={flag} alt="" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {countryName}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          population:{population}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          region:{region}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          capital:{capital}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
