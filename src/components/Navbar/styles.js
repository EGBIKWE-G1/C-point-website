import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#555555",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backGround: "transparent",
  },

  iconStyles: {
    justifyContent: "space-between",
  },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  label: {
    textTransform: "capitalize",
    fontSize: "1.125rem",
  },
  title: {
    maxWidth: 200,
    height: 100,
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 32,
    paddingLeft: 16,
  },
}));

export default useStyles;
