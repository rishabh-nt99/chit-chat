import React from "react";
import {
  alpha,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    component: {
      background: "#F6F6F6",
      height: "45px",
      alignItems: "center",
      display: "flex",
    },
    search: {
      position: "relative",
      borderRadius: "18px",
      backgroundColor: "#FFFFFF",
      margin: "0 13px",
      width: "100%",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: "#919191",
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      width: "100%",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "65px",
      fontSize: "14px",
      height: "15px",
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  })
);
const Search = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon fontSize="small" />
        </Box>
        <InputBase
          placeholder="Search or Start a new chat"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
    </Box>
  );
};

export default Search;
