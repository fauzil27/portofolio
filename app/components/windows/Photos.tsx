import React from "react";
import WindowControlls from "./WindowControlls";
import { Mail, Search } from "lucide-react";
import { gallery, photosLinks } from "@/app/constant/portofolio/data";
import Image from "next/image";
import useWindowStore from "@/app/store/Window";
import WindowWrapper from "../hoc/WindowWrapper";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControlls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((link) => (
              <li key={link.id}>
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={30}
                  height={30}
                />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map((photo) => (
              <li
                key={photo.id}
                onClick={() =>
                  openWindow("imgfile", {
                    id: photo.id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: photo.img,
                  })
                }
              >
                <Image
                  src={photo.img}
                  alt={`Gallery image ${photo.id}`}
                  width={300}
                  height={300}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
