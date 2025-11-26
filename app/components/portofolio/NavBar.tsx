import React from "react";
import Image from "next/image";
import { navIcons, navLinks } from "@/app/constant/portofolio/data";
import moment from "moment";
import useWindowStore from "@/app/store/Window";

export default function NavBar() {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
        <p className="font-bold">Adhim&apos;s Portfolio</p>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => openWindow(link.type, null)}>
              <p>{link.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <Image
                src={icon.img}
                className="icon"
                alt={`Icon ${icon.id}`}
                width={20}
                height={20}
              />
            </li>
          ))}
          <time>{moment().format("ddd MMMM D h:mm A")}</time>
        </ul>
      </div>
    </nav>
  );
}
