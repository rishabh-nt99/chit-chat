import React, { createContext, useContext } from "react";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

export const TemplateContext = createContext<any>(null);
const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          height: "95%",
          width: "20%",
          top: "25px",
          left: "95px",
          borderRadius: "3px",
          boxShadow: "none",
          borderRight: " 1px solid rgba(0,0,0,0.14)",
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "unset",
        },
      },
    },
  });
  return (
    <TemplateContext.Provider value={{}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
