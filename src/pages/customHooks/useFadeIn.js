import { useEffect, useRef } from "react";

const useFadeIn = (durantion = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    current.style.transition = `opacity ${durantion}s ease-in-out ${delay}s`;
    current.style.opacity = 1;
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const FadeIn = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(3, 6);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>My name is John</p>
    </div>
  );
};

export default FadeIn;
