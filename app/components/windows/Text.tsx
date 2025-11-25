import useWindowStore from "@/app/store/Window";
import React from "react";
import WindowControlls from "./WindowControlls";
import Image from "next/image";
import WindowWrapper from "../hoc/WindowWrapper";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, description, subtitle } = data;
  return (
    <>
      <div id="window-header">
        <WindowControlls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 space-y-6 bg-white">
        {image ? (
          <div className="w-full">
            <Image
              src={image}
              alt={name}
              className="w-full h-auto rounded "
              width={500}
              height={500}
            />
          </div>
        ) : null}

        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}

        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
