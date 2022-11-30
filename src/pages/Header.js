import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goReactHooks = () => {
    navigate("/reactHooks");
  };

  const goCustomHooks = () => {
    navigate("/customHooks");
  };
  return (
    <div>
      <header
        style={{
          padding: "20px",
          backgroundColor: "lightgray",
          fontSize: "24px",
        }}
      >
        React hooks 연습하기
        <button
          style={{ padding: "5px", margin: "0 10px" }}
          onClick={goReactHooks}
        >
          reacthooks
        </button>
        <button
          style={{ padding: "5px", margin: "0 10px" }}
          onClick={goCustomHooks}
        >
          customhooks
        </button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
