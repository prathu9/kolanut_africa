"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const CoverSwiper = () => {

  return (
    <swiper-container
      loop="true"
      autoPlay="true"
      style={{
        width: "100%",
        aspectRatio: "1.28",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <swiper-slide 
      style={{borderRadius: "24px"}}
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src="/homepage/cover-1.png"
            sizes="100vw"
            fill
            alt="cover"
            className="rounded-3xl"
          />
        </div>
      </swiper-slide>
      <swiper-slide style={{borderRadius: "24px"}}>
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src="/homepage/cover-2.png"
            sizes="100vw"
            fill
            alt="cover"
            className="rounded-3xl"
          />
        </div>
      </swiper-slide>
      <swiper-slide style={{borderRadius: "24px"}}>
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src="/homepage/cover-3.png"
            sizes="100vw"
            fill
            alt="cover"
            className="rounded-3xl"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  );
};

export default CoverSwiper;
