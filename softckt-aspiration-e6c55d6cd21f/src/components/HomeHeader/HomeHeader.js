import React from "react";

import { Typography, Grid, AppBar, Toolbar } from "@material-ui/core";

// import classNames from "classnames";

// styles
import useStyles from "./styles";

export default function HomeHeader() {
  var classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={1}>
          <Grid item xs={12} className={classes.headerBar}>
            <Typography
              variant="h3"
              weight="medium"
              className={classes.headerName}
            >
              Welcom to SoftCkt Ideation
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
