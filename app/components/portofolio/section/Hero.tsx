import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-40 px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <span className="">
            <h1 className="font-bold mb-6 flex flex-row lg:flex-col items-start gap-2">
              <span className="text-black text-xl lg:text-7xl">I&apos;m ,</span>
              <span className="text-black text-xl lg:text-7xl">
                Fauzil Adhim .
              </span>
            </h1>
          </span>
          <span className="flex justify-center">
            <Image
              src="/asset/me3.png"
              alt="Hero"
              width={750}
              height={750}
              quality={100}
              unoptimized
              priority
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
