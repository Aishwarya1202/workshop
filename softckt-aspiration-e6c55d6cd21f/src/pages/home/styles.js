import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  homecontainer: {
    height: "100vh",
  },
  khelContainer: {
    backgroundColor: "#daecfa",
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
  khelImgContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#62d6e8",
  },
  studyImge: {
    height: "50vh",
  },
  StudyImgeContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ArrowImgeContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowImge: {
    height: "20vh",
  },
  FunImgeContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  funImge: {
    height: "40vh",
  },
  KhelButtonContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  KhelButton: { textTransform: "none" },

  // WISE Block Start
  wiseContainer: {
    backgroundColor: "#daecfa",
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wiseImgContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#62d6e8",
  },
  BadHireContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  BadHireImge: {
    height: "40vh",
  },
  GoodHireImgeContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GoodHireImge: {
    height: "40vh",
  },
  WiseButtonContainer: {
    direction: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  WiseButton: { textTransform: "none" },
  // WISE Block End
}));
