import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// styles
import useStyles from "./styles";

//component
import HomeHeader from "../../components/HomeHeader";

import { Button, Grid } from "@material-ui/core";

import StudyImg from "../../images/boaringStudy.png";
import FunImg from "../../images/interestingGame.png";
import BadHire from "../../images/badhire.png";
import GoodHire from "../../images/goodhire.png";
import Arrow from "../../images/arrow.png";

import { goToLogin } from "../../context/UserContext";

function Home(props) {
  var classes = useStyles();

  let history = useHistory();

  const wiseEventHandler = (event) => {
    history.push({
      pathname: "/login",
      state: { detail: "WISE" },
    });
  };

  const khelEventHandler = (event) => {
    history.push({
      pathname: "/login",
      state: { detail: "KHEL" },
    });
  };

  return (
    <div container className={classes.container}>
      <HomeHeader />
      <div className={classes.fakeToolbar} />
      <Grid container spacing={12} className={classes.homecontainer}>
        {/* KHEL Block Start*/}
        <Grid item xs={12} className={classes.khelContainer}>
          <Grid container spacing={1} className={classes.khelImgContainer}>
            {/* Study Image block start  */}
            <Grid item xs={3} className={classes.StudyImgeContainer}>
              <img src={StudyImg} alt="" className={classes.studyImge} />
            </Grid>
            {/* Study Image block end  */}

            {/* Arrow Image block start */}
            <Grid item xs={1} className={classes.ArrowImgeContainer}>
              <img src={Arrow} alt="" className={classes.arrowImge} />
            </Grid>
            {/* Arrow Image block end */}

            {/* Fun Image block start  */}
            <Grid item xs={3} className={classes.FunImgeContainer}>
              <img src={FunImg} alt="" className={classes.funImge} />
            </Grid>
            {/* Fun Image block end  */}
            <Grid item xs={1}></Grid>
            {/* KHEL button start */}
            <Grid item xs={3} className={classes.KhelButtonContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.KhelButton}
                // onClick={() => goToLogin("KHEL", props.history)}
                onClick={khelEventHandler}
              >
                Try out "KHEL" to see the Transformation
              </Button>
            </Grid>
            {/* KHEL button end */}
          </Grid>
        </Grid>
        {/* KHEL Block End*/}

        {/* WISE Block Start*/}
        <Grid item xs={12} className={classes.wiseContainer}>
          <Grid container spacing={1} className={classes.wiseImgContainer}>
            {/* Study Image block start  */}
            <Grid item xs={3} className={classes.BadHireContainer}>
              <img src={BadHire} alt="" className={classes.BadHireImge} />
            </Grid>
            {/* Study Image block end  */}

            {/* Arrow Image block start */}
            <Grid item xs={1} className={classes.ArrowImgeContainer}>
              <img src={Arrow} alt="" className={classes.arrowImge} />
            </Grid>
            {/* Arrow Image block end */}

            {/* Fun Image block start  */}
            <Grid item xs={3} className={classes.GoodHireImgeContainer}>
              <img src={GoodHire} alt="" className={classes.GoodHireImge} />
            </Grid>
            {/* Fun Image block end  */}
            <Grid item xs={1}></Grid>
            {/* WISE button start */}
            <Grid item xs={3} className={classes.WiseButtonContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.WiseButton}
                // onClick={() => goToLogin("KHELS", props.history)}
                onClick={wiseEventHandler}
              >
                Try out "WISE" to see the Transformation
              </Button>
            </Grid>
            {/* WISE button end */}
          </Grid>
        </Grid>
        {/* WISE Block End*/}
      </Grid>
    </div>
  );
}

export default Home;
