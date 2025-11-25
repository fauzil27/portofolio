/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import WindowControlls from "./WindowControlls";
import { Search } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper";
import { locations } from "@/app/constant/portofolio/data";
import useLocationStore from "@/app/store/useLocationStore";
import Image from "next/image";
import useWindowStore from "@/app/store/Window";

const Finder = () => {
  const { setActiveLocation, activeLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const renderList = (name: string, items: any[]) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item: any) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={`${
              item.id === activeLocation?.id ? "active" : "non-active"
            }`}
          >
            <Image
              src={item.icon}
              className="w-4"
              alt={item.name}
              width={16}
              height={16}
            />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const openItem = (item: any) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControlls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>{renderList("Favorites", Object.values(locations))}</div>
          <div>{renderList("My Projects", locations.work.children)}</div>
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item: any) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <Image src={item.icon} alt={item.name} width={16} height={16} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
