import React, {component} from "react";
import { Grid } from "@material-ui/core";
//import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//import Pagination from '@material-ui/lab/Pagination';
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom.min";



// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Events" />
      <Grid container spacing={4} item xs={12} md={5}>
        
          {/* <Widget title="KHEL PCB WORKSHOP" disableWidgetMenu> */}
            <div className={classes.dashedBorder}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://tse2.mm.bing.net/th?id=OIP.iLtDAoy3g-2HBM3BdliB5wHaEK&pid=Api&P=0&w=272&h=153?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  KHEL PCB Workshop
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   from basics to advanced electronics you need for industry knowledgw
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  {/* <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> */}
                  <Box ml={0}>
                    <Typography variant="subtitle2" component="p">
                     Complexity
                    </Typography>
                    {/* <Typography variant="subtitle2" color="textSecondary" component="p">
                      Time
                    </Typography> */}
                  </Box>
                </Box>
                <Box>
                Time
                </Box>
              </CardActions>
            </Card>
              <Typography
                variant="h1"
                color="secondary"
                className={classes.text}
              >
                {/* information here */}
              <Router>
                <Route path="/game" component="game" />
                </Router>   
              <Button
               
                href="https://app.softckt.com"
              color="Primary" 
              variant="contained">Click here to Register</Button>
              </Typography>
            </div>
          {/* </Widget> */}
        </Grid>
      
    </>
  );
}
