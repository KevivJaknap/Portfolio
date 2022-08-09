import React, { useEffect } from "react";
import { Transition } from "react-transition-group";

const duration = 500;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function Intro() {
  const [visible, setIsVisible] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, duration);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <Transition in={visible} timeout={1500}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div className="flex flex-col w-96 h-96 items-center justify-center border-black border-2">
              <h1 className="text-6xl font-font1">I am</h1>
              <h1 className="text-6xl font-font1">
                <span className="font-bold">Keviv</span>
              </h1>
              <h1 className="text-6xl font-font1">
                <span className="font-bold">Jaknap</span>
              </h1>
              <h1 className="text-3xl font-font1 mt-3">
                <span className="">Web Developer</span>
              </h1>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
