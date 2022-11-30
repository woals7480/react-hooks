import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const BeforeLeave = () => {
  const begForLife = () => console.log("please don't leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default BeforeLeave;
