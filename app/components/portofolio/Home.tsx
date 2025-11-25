/* eslint-disable @typescript-eslint/no-explicit-any */
import { locations } from "@/app/constant/portofolio/data";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "@/app/store/Window";
import useLocationStore from "@/app/store/useLocationStore";

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const projects = locations.work?.children ?? [];

  const handleOpenWindow = (project: any) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={`group folder ${project.windowPosition}`}
            onClick={() => handleOpenWindow(project)}
          >
            <Image
              src={"/images/folder.png"}
              alt={project.name}
              width={64}
              height={64}
            />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
