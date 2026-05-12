import useWindowStore from "@/app/store/Window";
import React from "react";

const WindowControlls = ({ target }: { target: string }) => {
  const { closeWindow, maximizeWindow, minimizeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}></div>
      <div className="minimize" onClick={() => minimizeWindow(target)}></div>
      <div className="maximize" onClick={() => maximizeWindow(target)}></div>
    </div>
  );
};

export default WindowControlls;
