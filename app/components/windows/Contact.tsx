import React from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControlls from "./WindowControlls";
import Image from "next/image";
import { socials } from "@/app/constant/portofolio/data";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 bg-white space-y-5">
        <Image
          src="/images/adhim.png"
          alt="adhim"
          className="w-20 rounded-full"
          width={64}
          height={64}
        />
        <h3>Let&apos;s Connect</h3>
        <p>Got a question or want to chat? I&apos;m here to help.</p>
        <p>fauziladhim706@gmail.com</p>
        <ul>
          {socials.map((social) => (
            <li key={social.id} style={{ backgroundColor: social.bg }}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.text}
              >
                <Image
                  src={social.icon}
                  alt={social.text}
                  width={16}
                  height={16}
                  className="size-5"
                />
                <p>{social.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
