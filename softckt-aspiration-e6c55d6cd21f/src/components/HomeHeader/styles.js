import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "primary",
  },
  toolbar: {},
  headerBar: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerName: {
    color: "white",
    marginTop: theme.spacing(1),
    fontWeight: 500,
  },
}));
