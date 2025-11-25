import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const FONT_WEIGHT = {
  title: { min: 400, max: 900, default: 400 },
  subtitle: { min: 100, max: 400, default: 100 },
};

const renderText = (text: string, className: string, base = 400) => {
  return [...text].map((line, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `"wght" ${base}` }}
    >
      {line === " " ? "\u00a0" : line}
    </span>
  ));
};

const setupTextHover = (
  container: HTMLParagraphElement | HTMLHeadingElement,
  type: "title" | "subtitle"
) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHT[type];

  const animationText = (
    letter: HTMLElement,
    weight: number,
    duration = 0.25
  ) => {
    return gsap.to(letter, {
      duration,
      fontVariationSettings: `"wght" ${weight}`,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);

      animationText(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animationText(letter, base, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

export default function Welcome() {
  const titleRef = React.useRef<HTMLParagraphElement>(null);
  const subtitleRef = React.useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current || !subtitleRef.current) return;
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      titleCleanup?.();
      subtitleCleanup?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={titleRef}>
        {renderText(
          "Hey, I'm Adhim! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={subtitleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl font-georama italic")}
      </h1>

      <div className="small-screen font-georama">
        <p>This Portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
}
