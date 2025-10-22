import { motion, Variants } from "motion/react";
import React from "react";

export default function About({ fadeUp }: { fadeUp: Variants }) {
  return (
    <motion.section
      id="about"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-5xl md:text-6xl font-bold mb-8">
            About <span className="italic font-light">Me</span>
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Hi! I’m a Full-Stack Developer with 1 year of experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy creating websites that are simple, clean, and easy to use —
            because for me, good design isn’t about how complex it looks, but
            how clear and enjoyable the user experience feels.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid gap-6"
        >
          {["Junior Developer"].map((role) => (
            <motion.div
              key={role}
              whileHover={{ scale: 1.03 }}
              className="bg-neutral-50 p-8 rounded-2xl hover:bg-black hover:text-white transition-all"
            >
              <div className="font-bold text-xl mb-2">{role}</div>
              <p className="text-sm opacity-70">Tech Company</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
