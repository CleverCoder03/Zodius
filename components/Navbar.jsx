"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { Play } from "next/font/google";

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(()=>{
    if (isAudioPlaying){
      audioElementRef.current.play()
    }else{
      audioElementRef.current.pause()
    }
  },[isAudioPlaying])

  const navItems = [
    {
      title: "Nexus",
      path: "nexus",
    },
    {
      title: "Vault",
      path: "vault",
    },
    {
      title: "Prologue",
      path: "prologue",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <div className="relative w-10 h-10">
              <Image src="/img/logo.png" alt="Logo" fill />
            </div>
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={`#${item.path}`}
                  className="nav-hover-btn"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                src="/audio/loop.mp3"
                ref={audioElementRef}
                className="hidden"
                loop
              />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${
                      isIndicatorActive ? "active" : ""
                    }`}
                    style={{ animationDelay: `${bar * 0.2}s` }}
                  ></div>
                ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
