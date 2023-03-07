import React, { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import nk87 from "../public/images/nk87/NK87_DarkMilkshake1.webp";

export default function HeroSection() {
  const autoplay = useRef(Autoplay({ delay: 6000 }));

  return (
    <section className="h-full w-full relative">
      <Image src={nk87} alt={`nk87 image`} width={2500} height={2500}></Image>
      <div className="absolute bottom-4 right-9 text-2xl md:text-4xl md:bottom-14 ">
        <p className="text-slate-700">NK87 Dark Milkshake Edition</p>
      </div>
    </section>
  );
}
