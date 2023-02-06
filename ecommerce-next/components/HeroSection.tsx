import React from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { HeroSectionData } from "../utils/data";

export default function HeroSection() {
  return (
    <section className="h-full">
      <div className="flex h-full">
        <Carousel loop height="100%" sx={{ flex: 1 }}>
          {HeroSectionData.map((data, i: number) => {
            return (
              <Carousel.Slide key={i}>
                <Image
                  src={data.image}
                  alt={`${data.image} image ${i}`}
                  width={2500}
                  height={2500}
                ></Image>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
