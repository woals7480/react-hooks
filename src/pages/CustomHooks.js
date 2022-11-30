import React from "react";
import { Outlet, Link } from "react-router-dom";

const CustomHooks = () => {
  return (
    <div>
      <h2 style={{ padding: "15px" }}>CustomHooks</h2>
      <main>
        <Outlet />
        <ul>
          <li>
            <Link to="useInput">UseInput</Link>
          </li>
          <li>
            <Link to="useTabs">UseTabs</Link>
          </li>
          <li>
            <Link to="useTitle">UseTitle</Link>
          </li>
          <li>
            <Link to="useClick">UseClick</Link>
          </li>
          <li>
            <Link to="useConfirm">UseConfirm</Link>
          </li>
          <li>
            <Link to="usePreventLeave">UsePreventLeave</Link>
          </li>
          <li>
            <Link to="useBeforeLeave">UseBeforeLeave</Link>
          </li>
          <li>
            <Link to="useFadeIn">UseFadeIn</Link>
          </li>
          <li>
            <Link to="useNetwork">UseNetwork</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default CustomHooks;
