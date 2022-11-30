import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home";
import ReactHooks from "./pages/ReactHooks";
import CustomHooks from "./pages/CustomHooks";

//reacthooks
import UseCallback from "./pages/reactHooks/useCallback";
import UseContext from "./pages/reactHooks/useContext";
import UseMemo from "./pages/reactHooks/useMemo";
import UseReducer1 from "./pages/reactHooks/useReducer1";
import UseReducer2 from "./pages/reactHooks/useReducer2";

//customhooks
import UseInput from "./pages/customHooks/useInput";
import UseTabs from "./pages/customHooks/useTabs";
import UseTitle from "./pages/customHooks/useTitle";
import UseClick from "./pages/customHooks/useClick";
import UseConfirm from "./pages/customHooks/useConfirm";
import UsePreventLeave from "./pages/customHooks/usePreventLeave";
import UseBeforeLeave from "./pages/customHooks/useBeforeLeave";
import UseFadeIn from "./pages/customHooks/useFadeIn";
import UseNetwork from "./pages/customHooks/useNetwork";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/reactHooks" element={<ReactHooks />}>
            <Route path="useCallback" element={<UseCallback />} />
            <Route path="useContext" element={<UseContext />} />
            <Route path="useMemo" element={<UseMemo />} />
            <Route path="useReducer1" element={<UseReducer1 />} />
            <Route path="useReducer2" element={<UseReducer2 />} />
          </Route>
          <Route path="/customHooks" element={<CustomHooks />}>
            <Route path="useInput" element={<UseInput />} />
            <Route path="useTabs" element={<UseTabs />} />
            <Route path="useTitle" element={<UseTitle />} />
            <Route path="useClick" element={<UseClick />} />
            <Route path="useConfirm" element={<UseConfirm />} />
            <Route path="usePreventLeave" element={<UsePreventLeave />} />
            <Route path="useBeforeLeave" element={<UseBeforeLeave />} />
            <Route path="useFadeIn" element={<UseFadeIn />} />
            <Route path="useNetwork" element={<UseNetwork />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
