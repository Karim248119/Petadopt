"use client";
import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { Datacomments } from "@/app/data/Data";
import CarouselCustomNavigation from "./Slider";
export default function Comments() {
  const [play, setPlay] = useState(true);
  return (
    <div className="min-h-[500px] w-full mb-40" id="reviews">
      <div className=" md:h-[500px] md:w-1/5 absolute left-0 bg-black"></div>
      <Carousel
        className=" md:h-[400px] md:w-[1200px] absolute md:left-24 left-0 mt-[80px]  overflow-hidden"
        navigation={Number}
        autoplay={play}
        autoplayDelay={2000}
        loop={play}
        prevArrow={false}
        nextArrow={false}
        onMouseEnter={() => {
          setPlay(false);
        }}
        onMouseLeave={() => {
          setPlay(true);
        }}
      >
        {Datacomments.map((comment) => (
          <CarouselCustomNavigation key={comment.id} comment={comment} />
        ))}
      </Carousel>
    </div>
  );
}
