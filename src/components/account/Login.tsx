import React from "react";
import {
  Dialog,
  withStyles,
  makeStyles,
  Box,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";

import { clientId } from "../../constants/data";

import { GoogleLogin } from "react-google-login";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  qrBox: {
    padding: "56px 56px 0 0",
  },
  qr: {
    height: "256px",
    width: "256px",
  },
  instructions: {
    padding: "56px 0 56px 56px",
  },
  title: {
    fontSize: "26px",
    marginBottom: "26px",
    color: "#525252",
    fontWeight: 300,
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
  },
  list: {
    "& > *": {
      padding: 0,
      fontSize: "18px",
      marginTop: "15px",
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "13%",
    // boxShadow: "none",
    borderRadius: "3px",
    maxHeight: "100%",
    maxWidth: "920px",
  },
};

interface LoginProps {
  classes: any;
}
const Login: React.FC<LoginProps> = ({ classes }) => {
  const classnames = useStyles();
  const qrurl = `https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg`;
  // const clientId =
  //   "476526242104-3s9tdp2c8i746ghd721btb55tlnlsieg.apps.googleusercontent.com";

  const { account, setAccount } = useContext(AccountContext);
  const onLoginSuccess = (res) => {
    console.log("Login Successful");
    setAccount(res.profileObj);
  };

  const onLoginFailure = () => {
    console.log("Login Failed");
  };
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box className={classnames.instructions}>
          <Typography className={classnames.title}>
            To use Chit-Chat on your computer:
          </Typography>
          <List className={classnames.list}>
            <ListItem>1. Login Using Google Account</ListItem>
            <ListItem>2. Connect With a Friend also on the App</ListItem>
            <ListItem>3. Send Them Hi and Start Chit Chatting! :D</ListItem>
          </List>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className={classes.qrBox}
          padding="56px 56px 0 0"
        >
          <img src={qrurl} alt="" className={classnames.qr} />
          <GoogleLogin
            cookiePolicy="single_host_origin"
            clientId={clientId}
            isSignedIn={true}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
          />
        </Box>
      </Box>
      <Box
        style={{
          height: "100%",
          width: "100%",
          background: "#EFEFEF",
          padding: 0,
          marginTop: "12.5%",
          overflow: "hidden",
        }}
      ></Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
