import useWindowStore from "@/app/store/Window";
import React from "react";

const WindowControlls = ({ target }: { target: string }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}></div>
      <div className="minimize"></div>
      <div className="maximize"></div>
    </div>
  );
};

export default WindowControlls;
