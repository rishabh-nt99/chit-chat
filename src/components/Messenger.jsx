import { AppBar, Toolbar, Box, makeStyles } from "@material-ui/core";
import Login from "./account/Login";
import logo from "../assets/logo.png";
import React, { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatBox from "./chatbox/ChatBox";

const useStyles = makeStyles({
  navbarLogin: {
    height: "245px",
    background: "#01172F",
    boxShadow: "none",
  },
  navbarChat: {
    height: "145px",
    background: "#000D1C",
    boxShadow: "none",
  },
  container: {
    background: "#FFFFFF",
    height: "100vh",
  },
});

const Messenger = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  console.log("Account: ", account);
  // const logo = require("/logo.png");
  return (
    <Box className={classes.container}>
      <AppBar className={account ? classes.navbarChat : classes.navbarLogin}>
        <Toolbar>
          {!account && (
            <img
              src={logo}
              alt="chit and chat"
              style={{
                width: "170px",
                height: "170px",
                marginTop: "-20px",
                marginLeft: "450px",
              }}
            />
          )}
        </Toolbar>
      </AppBar>

      {account ? <ChatBox /> : <Login />}
    </Box>
  );
};

export default Messenger;
