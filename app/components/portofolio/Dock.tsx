import { dockApps } from "@/app/constant/portofolio/data";
import React from "react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "@/app/store/Window";

export default function Dock() {
  const dockRef = React.useRef<HTMLDivElement>(null);

  const { openWindow, closeWindow, windows } = useWindowStore();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: l, width: w } = icon.getBoundingClientRect();
        const centerX = l - left + w / 2;
        const distance = Math.abs(mouseX - centerX);
        const intensity = Math.exp(-(distance ** 2) / 2000);

        gsap.to(icon, {
          y: -15 * intensity,
          duration: 0.2,
          scale: 1 + 0.25 * intensity,
          ease: "power2.out",
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;
      animateIcons(mouseX);
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const handleDockClick = (app: (typeof dockApps)[0]) => {
    if (!app.canOpen) return;

    const win = windows[app.id];

    if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id, null);
    }

    console.log(windows);
  };
  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map((app) => (
          <div key={app.id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={app.name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={app.name}
              data-tooltip-delay-show={150}
              disabled={!app.canOpen}
              onClick={() => handleDockClick(app)}
            >
              <Image
                src={`/images/${app.icon}`}
                alt={app.name}
                width={72}
                height={72}
                loading="lazy"
                className={app.canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
}
