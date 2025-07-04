"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.3,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    })
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px] lg:text-lg">
          welcome to zodius
        </h2>
        <AnimatedTitle title="Disc<b>o</b>ver the w<b>o</b>rld's <br /> l<b>a</b>rgest sh<b>a</b>red
      <b>a</b>dventure" containerClass="mt-5 !text-black text-center"/>

        <div className="about-subtext">
          <p>The Game of Games begins - your life, now an epic MMORPG</p>
          <p>Zodius unites every player from countless games and platforms</p>
        </div>
        
      </div>
      <div className="relative h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <Image
              src="/img/about.webp"
              alt="background"
              className="absolute left-0 top-0 size-full object-cover"
              fill
            />
          </div>
        </div>
    </div>
  );
};

export default About;
