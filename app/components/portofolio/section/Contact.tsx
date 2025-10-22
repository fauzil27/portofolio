import { Github, Linkedin, Mail } from "lucide-react";
import { motion, Variants } from "motion/react";

export default function Contact({ fadeUp }: { fadeUp: Variants }) {
  return (
    <motion.section
      id="contact"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-24 px-6 bg-black text-white text-center"
    >
      <h3 className="text-5xl font-bold mb-6">
        Let s <span className="italic font-light">Talk</span>
      </h3>
      <p className="text-lg mb-12 opacity-80">
        I’m always open to new ideas and collaborations — feel free to reach
        out!
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        <a
          href="mailto:fauzanadhim706@gmail.com"
          className="bg-white text-black px-8 py-4 font-bold rounded-full hover:bg-gray-200 transition flex items-center gap-3"
        >
          <Mail size={20} /> Email Me
        </a>
        <a
          href="https://github.com/fauzil27"
          className="border-2 border-white px-8 py-4 font-bold rounded-full hover:bg-white hover:text-black transition flex items-center gap-3"
        >
          <Github size={20} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-fauzil-adhim-482218284/"
          className="border-2 border-white px-8 py-4 font-bold rounded-full hover:bg-white hover:text-black transition flex items-center gap-3"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
