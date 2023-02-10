import React, { useRef } from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HeroSectionData } from "../utils/data";

export default function HeroSection() {
  const autoplay = useRef(Autoplay({ delay: 6000 }));

  return (
    <section className="h-full w-full relative">
      <div className="flex">
        <Carousel
          loop
          height="100%"
          sx={{ flex: 1 }}
          plugins={[autoplay.current]}
        >
          {HeroSectionData.map((data, i: number) => {
            return (
              <Carousel.Slide key={i}>
                <Image
                  src={data.image}
                  alt={`${data.image} image ${i}`}
                  width={2500}
                  height={2500}
                ></Image>
                <div className="absolute bottom-4 right-3 text-2xl md:text-4xl md:bottom-14 ">
                  {data.image.split("/")[3].split(".")[0].split("_").join(" ")}
                </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
