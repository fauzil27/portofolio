import React from "react";
import WindowControlls from "./WindowControlls";
import {
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  ShieldHalf,
  Search,
  Share,
  Plus,
  Copy,
  // MoveRight,
} from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper";
// import { blogPosts } from "@/app/constant/portofolio/data";
// import Image from "next/image";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="safari" />
        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />

            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="blog">
        <h2>My Developer Blog</h2>

        <div className="space-y-8">
          <div className="text-center text-gray-500 font-bold text-2xl">
            COMING SOON
          </div>
          {/* {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <div className="col-span-2">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={300}
                />
              </div>

              <div className="content">
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  Read More
                  <MoveRight className="icon" />
                </a>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
