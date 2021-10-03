import { Dialog, withStyles, makeStyles, Box } from "@material-ui/core";
import Conversations from "../menu/Conversations";
import Search from "../menu/Search";
import Header from "../menu/Header";

const useStyles = makeStyles({
  component: {
    display: "flex",
    flexDirection: "row",
  },
  leftComponent: {
    minWidth: "380px",
  },
  rightComponent: {
    borderLeft: " 1px solid rgba(0,0,0,0.14)",
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "90%",
    borderRadius: "3px",
    maxHeight: "100%",
    maxWidth: "100%",
  },
};

const ChatBox = ({ classes }) => {
  const classnames = useStyles();
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
      style={{ padding: 0 }}
    >
      <Box className={classnames.component}>
        <Box className={classnames.leftComponent}>
          <Header />
          <Search />
          <Conversations />
        </Box>
        <Box className={classnames.rightComponent}>Hi</Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
