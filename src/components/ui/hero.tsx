"use client";
import { HeroSection } from "@/lib/utils";
import Image from "next/image";
import qs from "qs";
import { useEffect, useState } from "react";

export const Hero = (hero:any) => {
  // const [content, setContent]:any = useState("");
  // useEffect(() => {
  //   const fetchHomeData = async () => {
  //     try {
  //       const resdata = await HeroSection();
  //       console.log(resdata);
  //       if (resdata.status) {
  //         setContent(resdata.data);
  //         console.log(resdata.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchHomeData();
  // }, []);
  return (
    hero && (
      <header className="relative h-[600px] overflow-hidden">
        <Image
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
          height={1080}
          src={hero.background_image}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center py-28">
          <div className="flex flex-row pt-5 mx-auto px-10 justify-evenly">
            <div className="relative">
              <h1 className="max-w-10 text-white text-6xl font-semibold pt-14">
                {hero.title}
              </h1>
            </div>
            <div className="">
              <Image
                src={hero.sidebar_image}
                width={500}
                height={500}
                alt="Logo image"
              />
            </div>
          </div>
          <div className="flex transform -translate-y-20">
            <div className="flex flex-col gap-2 items-center">
              <Image
                src="/assets/icons/ScrollDown.png"
                width={32}
                height={32}
                alt="Menu"
                className=" cursor-pointer"
              />
              <a className="text-white font-normal" href="#">
                Scroll Down
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  );
};
