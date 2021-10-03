import { Box, makeStyles, Typography } from "@material-ui/core";
import { AccountContext } from "../../context/AccountProvider";
import { useContext, useState } from "react";

const useStyle = makeStyles({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  displayPic: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    padding: "18px 0",
  },
  name: {
    background: "#FFFFFF",
    padding: "12px 30px 12px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  description: {
    padding: "10px 20px 28px 30px",
    "& > *": {
      fontSize: "12px",
      color: "rgba(0, 0, 0, 0.45)",
    },
  },
});
const Profile = () => {
  const classes = useStyle();
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box className={classes.imageContainer}>
        <img
          src={account.imageUrl}
          alt="profile pic"
          className={classes.displayPic}
        />
      </Box>
      <Box className={classes.name}>
        <Typography
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#023873",
          }}
        >
          Your Name{" "}
        </Typography>
        <Typography style={{ margin: "14px 0", color: "#4A4A4A" }}>
          {account.name}
        </Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>
          This is not your username or pin. This will be visible to your
          Chit-Chat contacts.
        </Typography>
      </Box>
      <Box className={classes.name}>
        <Typography
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#023873",
          }}
        >
          About{" "}
        </Typography>
        <Typography style={{ margin: "14px 0", color: "#4A4A4A" }}>
          EAT . SLEEP . REPEAT
        </Typography>
      </Box>
    </>
  );
};

export default Profile;
