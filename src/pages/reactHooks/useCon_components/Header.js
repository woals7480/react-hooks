import React, { useContext } from "react";
import { ThemeContext } from "../useCon_context/ThemeContext";
import { UserContext } from "../useCon_context/UserContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome {user}!</h1>
    </header>
  );
};

export default Header;
