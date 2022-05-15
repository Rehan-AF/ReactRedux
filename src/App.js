import { createTheme, ThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/navbar";
import { fetchAsyncDetails } from "./features/actions";
import "./index.css";
import Routing from "./routers";
const App = () => {
  const dispatch = useDispatch();

  const pro = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchAsyncDetails());
  }, []);
  console.log(pro, "helo data");

  const mode = useSelector((state) => state.darkMode);
  const theme = createTheme({
    palette: {
      color: {
        main: mode ? "#000000" : "#FFFFFF",
        primary: mode ? "#4C4C4C" : "#FFFFFF",
      },
      backgroundColor: {
        main: mode ? "#FFFFFF" : "#222338",
        primary: mode ? "#FFFFFF" : "#220038",
      },
      icon: {
        main: mode ? "#FFE9D" : "#FFFFFF",
        primary: mode ? "#D3EDE0" : "#FFFFFF",
      },
    },

    typography: {
      fontFamily: "Inter",
      h1: {
        fontSize: "30px",
        fontWeight: 600,
      },
      h2: {
        fontSize: "15px",
        fontWeight: 600,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};

export default App;
