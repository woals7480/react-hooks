import React, { useState } from "react";
import Page from "./useCon_components/Page";
import { ThemeContext } from "./useCon_context/ThemeContext";
import { UserContext } from "./useCon_context/UserContext";
import "./useCon.css";

const UseContext = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <UserContext.Provider value={"정재민"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default UseContext;
