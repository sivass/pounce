"use client";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { About } from "@/components/widgets/about";
import { Service } from "@/components/widgets/service";
import { Testimonial } from "@/components/widgets/testimonial";
import { Work } from "@/components/widgets/work";
import { AppSettings, HeroSection, Pages } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [menu, setMenu]: any = useState();
  const [hero, setHero]: any = useState();
  const [about, setAbout]: any = useState({
    title: "",
    description: "",
  });
  const [work, setWork]: any = useState();
  const [service, setService]: any = useState();
  const [testimonial, setTestimonial]: any = useState();
  const [otherContent, setOtherContent]: any = useState();

  // Hero section
  const heroRecord = async () => {
    try {
      const resdata: any = await HeroSection();
      if (resdata.status) {
        setHero(resdata.data);
        //console.log(resdata.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // App setting section
  const appSettings = async () => {
    try {
      const resdata: any = await AppSettings();
      if (resdata.status) {
        setOtherContent({
          app_name: resdata.data.app_name,
          description: resdata.data.description,
          logo_url: resdata.data.logo,
          twitter_link: resdata.data.twitter_link,
          linkedin_link: resdata.data.linkedin_link,
          fb_link: resdata.data.fb_link,
          instagram_link: resdata.data.instagram_link,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Pages
  const pagesRecord = async () => {
    try {
      const resdata: any = await Pages();
      //console.log(resdata);
      if (resdata.status) {
        const response = resdata.data[0];
        //console.log(response.menu);
        setMenu(response.menu);
        setAbout({
          title: response.about[0].attributes.title,
          description: response.about[0].attributes.description,
        });
        setWork(response.work);
        setService(response.service);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    heroRecord();
    appSettings();
    pagesRecord();
  }, []);
  console.log(menu);
  return (
    <main className="">
      <Header {...otherContent} />
      <Hero {...hero} />
      <About {...about} />
      <Work {...work} />
      <Service {...service} />
      <Testimonial {...testimonial} />
      <Footer {...menu} {...otherContent} />
    </main>
  );
}
