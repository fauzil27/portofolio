import { projects } from "@/app/constant/portofolio/data";
import { ExternalLink } from "lucide-react";
import { motion, Variants } from "motion/react";
import React from "react";

export default function Project({ fadeUp }: { fadeUp: Variants }) {
  return (
    <motion.section
      id="projects"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-6 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-5xl font-bold mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center group">
                <motion.div
                  className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="text-white opacity-0 group-hover:opacity-100 z-10 font-semibold">
                  View Project
                </span>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3">{p.title}</h4>
                <p className="text-gray-700 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-100 px-3 py-1 text-sm rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 font-bold mt-4 hover:gap-4 transition-all"
                >
                  Explore <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
