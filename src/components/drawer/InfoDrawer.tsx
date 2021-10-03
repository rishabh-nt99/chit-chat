import { Drawer, Box, Typography, makeStyles } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import Profile from "./Profile";
const useStyles = makeStyles({
  header: {
    background: "#01172f",
    color: "#FFFFFF",
    display: "flex",
    height: "123px",
    margin: 0,
    padding: 0,
    border: "#01172f",
    "& > *": {
      marginTop: "auto",
      padding: "15px",
      fontWeight: 600,
    },
  },
  component: {
    background: "#EDEDED",
    height: "90%",
  },
});
interface InfoDrawerProps {
  open: any;
  setOpen: any;
}
const InfoDrawer: React.FC<InfoDrawerProps> = ({ open, setOpen }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Drawer open={open} onClose={handleClose}>
        <Box className={classes.header}>
          <ArrowBack onClick={handleClose} />
          <Typography>Profile</Typography>
        </Box>
        <Box className={classes.component}>
          <Profile />
        </Box>
      </Drawer>
    </Box>
  );
};

export default InfoDrawer;
