import useWindowStore from "@/app/store/Window";
import WindowControlls from "./WindowControlls";
import Image from "next/image";
import WindowWrapper from "../hoc/WindowWrapper";

const ImageWdw = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;
  return (
    <>
      <div id="window-header">
        <WindowControlls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className="w-full">
            <Image
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
              width={500}
              height={500}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageWdw, "imgfile");

export default ImageWindow;
