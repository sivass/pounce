"use client";
import Image from "next/image";
import qs from "qs";
import { useEffect, useState } from "react";

const homePageQuery = qs.stringify({
  populate: {
    logo: {
      fields: ["url", "alternativeText"],
    },
    background_image: {
      fields: ["url", "alternativeText"],
    },
  },
});

export const Hero = () => {
  const [content, setContent] = useState({
    background_image: "http://localhost:1337/uploads/background_f220576008.png",
    title: "UNLEASH YOUR MARKETING",
    sidebar_image: "/hero-sidebar.png",
  });
  console.log(content.background_image);
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const baseUrl =
          process.env.STRAPI_PUBLIC_URL || `http://localhost:1337`;
        const url = new URL("/api/app-settings", baseUrl);
        url.search = homePageQuery;
        //const url = process.env.NEXT_STRAPI_PUBLIC_URL + `/api/app-settings`;
        const res = await fetch(url.href, { cache: "no-store" });
        const resdata = await res.json();
        if (resdata.data.length > 0) {
          const response = resdata.data[0];
          //console.log(response);
          const formatData = {
            background_image:
              `http://localhost:1337`+ response.attributes.background_image.data.attributes.url,
            title: "UNLEASH YOUR MARKETING",
            sidebar_image: "/hero-sidebar.png",
          };
          setContent(formatData);
          //console.log(content);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchHomeData();
  }, []);
  return (
    content && (
      <header className="relative h-[600px] overflow-hidden">
        <Image
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
          height={1080}
          src={content.background_image}
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
                {content.title}
              </h1>
            </div>
            <div className="">
              <Image
                src={content.sidebar_image}
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
