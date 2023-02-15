"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Image = {
  title: string;
  src: string;
};

const images: Image[] = [
  {
    title: "hero1",
    src: "/hero1.webp",
  },
  {
    title: "hero2",
    src: "/hero2.webp",
  },
  {
    title: "hero3",
    src: "/hero3.webp",
  },
  {
    title: "hero4",
    src: "/hero4.webp",
  },
  {
    title: "hero5",
    src: "/hero5.webp",
  },
];

const Hero = () => {
  const [show, setShow] = useState(images[0].src);

  return (
    <section className="sm:flex sm:justify-center">
      <Image
        src={"/hero1.webp"}
        alt="hero logo"
        width={1440}
        height={800}
        className="w-auto h-auto rounded-lg mt-8 shadow-xl"
      />
    </section>
  );
};

export default Hero;
