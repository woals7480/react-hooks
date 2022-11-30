import { useEffect, useState } from "react";

const UseScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return state;
};

const Scroll = () => {
  const { y } = UseScroll();
  return (
    <div style={{ height: "300vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default Scroll;
