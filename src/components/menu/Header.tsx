import { Box, makeStyles } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import InfoDrawer from "../drawer/InfoDrawer";
import HeaderMenu from "./HeaderMenu";
const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#EDEDED",
    padding: "10px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    borderRadius: "50%",
    width: 37,
    height: 37,
  },
  icons: {
    alignItems: "center",
    "& > *": {
      padding: "8px",
      color: "#919191",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const [openDraw, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          alt="Profile Pic"
          className={classes.avatar}
          onClick={toggleDrawer}
        />
        <Box className={classes.icons}>
          <Chat />
          <HeaderMenu openDrawer={setOpenDrawer} />
        </Box>
      </Box>
      <InfoDrawer open={openDraw} setOpen={setOpenDrawer} />
    </>
  );
};
export default Header;
