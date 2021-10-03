import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { clientId } from "../../constants/data";
import { GoogleLogout } from "react-google-login";
import { AccountContext } from "../../context/AccountProvider";
import { useContext } from "react";

const useStyles = makeStyles({
  menuItem: {
    paddingLeft: "10px",
    paddingRight: "50px",
  },
  logout: {
    boxShadow: "none!important",
    border: "none!important",
  },
});

interface HeaderMenuProps {
  openDrawer;
}
const HeaderMenu: React.FC<HeaderMenuProps> = ({ openDrawer }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<any>(false);
  const { setAccount } = useContext(AccountContext);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const onLogoutSuccess = () => {
    alert("Logged Out Succesfully!");
    console.clear();
    setAccount("");
  };
  return (
    <>
      <MoreVert onClick={(event) => handleClick(event)} />
      <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        style={{
          marginTop: "40px",
        }}
      >
        <MenuItem className={classes.menuItem} onClick={() => openDrawer(true)}>
          Profile
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          <GoogleLogout
            className={classes.logout}
            clientId={clientId}
            onLogoutSuccess={onLogoutSuccess}
          >
            Logout
          </GoogleLogout>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
