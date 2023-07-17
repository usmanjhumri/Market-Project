import { useState } from "react";
import "./App.css";
import { ThemeProvider, useTheme } from "@emotion/react";
import light from "./Theming/LightTheme";
import dark from "./Theming/DarkTheme";
import { CssBaseline } from "@mui/material";
import { createContext } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material";
import SideBar from "./CommonComponents/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import MainHomePage from "./Components/MainHomePage/MainHomePage";
import SideBar2 from "./CommonComponents/SideBar/Sidebar2";
import Home2 from "./Components/SideBar2Home/Home2";

export const ThemeChkr = createContext();

function App() {
  const [mode, setMode] = useState(false);

  const getTheme = (mode) => {
    // console.log(mode);
    setMode(mode);
  };

  return (
    <div className="App">
      <ThemeChkr.Provider value={{ getTheme: getTheme }}>
        <ThemeProvider theme={createTheme(mode ? dark : light)}>
          <Routes>
            <Route
              path="/"
              element={<SideBar childComponent={<MainHomePage />} />}
            />
            <Route
              path="/one"
              element={<SideBar2 childComponent={<Home2 />} />}
            />
          </Routes>
          <CssBaseline />
        </ThemeProvider>
      </ThemeChkr.Provider>
    </div>
  );
}

export default App;
