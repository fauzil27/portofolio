import { motion } from "motion/react";
import React from "react";
import { Variants } from "motion/react";
import LogoLoop from "../LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiJavascript,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { FaGolang, FaNode } from "react-icons/fa6";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <FaGolang />, title: "Golang", href: "https://golang.org" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://javascript.com",
  },
  {
    node: <SiExpress />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  { node: <FaNode />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
];

export default function Skill({ fadeUp }: { fadeUp: Variants }) {
  return (
    <motion.section
      id="skills"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-24 px-6 bg-white"
    >
      <div className="w-full text-center">
        <h3 className="text-5xl font-bold mb-12">Skills</h3>
        <div className="pt-12">
          <LogoLoop logos={techLogos} gap={100} logoHeight={80} />
        </div>
      </div>
    </motion.section>
  );
}
