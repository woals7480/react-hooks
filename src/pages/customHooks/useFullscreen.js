import { useRef } from "react";

const UseFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    const checkFullscreen = document.fullscreenElement;
    if (checkFullscreen !== null) {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
    }
  };

  return { element, triggerFull, exitFull };
};

const Fullscreen = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are Full" : "We are small");
  };
  const { element, triggerFull, exitFull } = UseFullscreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

export default Fullscreen;
