"use client";
import React from "react";
import NavBar from "./components/portofolio/NavBar";
import Welcome from "./components/portofolio/Welcome";
import Dock from "./components/portofolio/Dock";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";
import Terminal from "./components/windows/Terminal";
import Safari from "./components/windows/Safari";
import Finder from "./components/windows/Finder";
import Text from "./components/windows/Text";
import ImageWdw from "./components/windows/Image";

gsap.registerPlugin(Draggable);

import dynamic from "next/dynamic";
import Contact from "./components/windows/Contact";
import Home from "./components/portofolio/Home";
import Photos from "./components/windows/Photos";

const Resume = dynamic(() => import("./components/windows/Resume"), {
  ssr: false,
  loading: () => <div>Loading PDF...</div>,
});

export default function Page() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWdw />
      <Contact />
      <Home />
      <Photos />
    </div>
  );
}
