import React from "react";
import { Link, Outlet } from "react-router-dom";

const ReactHooks = () => {
  return (
    <div>
      <h2 style={{ padding: "15px" }}>ReactHooks</h2>
      <main>
        <ul>
          <li>
            <Link to="useCallback">UseCallback</Link>
          </li>
          <li>
            <Link to="useContext">UseContext</Link>
          </li>
          <li>
            <Link to="useMemo">UseMemo</Link>
          </li>
          <li>
            <Link to="useReducer1">UseReducer1</Link>
          </li>
          <li>
            <Link to="useReducer2">UseReducer2</Link>
          </li>
        </ul>
        <Outlet />
      </main>
    </div>
  );
};

export default ReactHooks;
