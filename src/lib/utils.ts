"use client";
import { type ClassValue, clsx } from "clsx";
import qs from "qs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const baseUrl = process.env.STRAPI_PUBLIC_URL || `http://localhost:1337`;
const heroPageQuery = qs.stringify({
  populate: {
    banner: {
      fields: ["url", "alternativeText"],
    },
  },
});
const appSettingsPageQuery = qs.stringify({
  populate: {
    logo: {
      fields: ["url", "alternativeText"],
    },
  },
});
const pagesQuery = qs.stringify({
  populate: {
    image: {
      fields: ["url", "alternativeText"],
    },
  },
});

// App settings
export const AppSettings = async () => {
  let result;
  try {
    const url = new URL("/api/app-settings", baseUrl);
    url.search = appSettingsPageQuery;
    const res = await fetch(url.href, { cache: "no-store" });
    const resdata = await res.json();
    if (resdata.data.length > 0) {
      const response = resdata.data[0];
      //console.log(response);
      const formatData = {
        logo: baseUrl + response.attributes.logo.data.attributes.url,
        app_name: response.attributes.app_name,
        short_description: response.attributes.short_description,
        description: response.attributes.description,
        fb_link: response.attributes.fb_link,
        twitter_link: response.attributes.twitter_link,
        linkedin_link: response.attributes.linkedin_link,
        instagram_link: response.attributes.instagram_link,
      };
      result = {
        status: true,
        message: "Success",
        data: formatData,
      };
    } else {
      throw new Error("Invalid");
    }
  } catch (error) {
    result = {
      status: false,
      message: "Error",
      data: {},
    };
  }
  return result;
};
// Hero section
export const HeroSection = async () => {
  let result;
  try {
    const url = new URL("/api/hero-sections", baseUrl);
    url.search = heroPageQuery;
    const res = await fetch(url.href, { cache: "no-store" });
    const resdata = await res.json();
    if (resdata.data.length > 0) {
      const response = resdata.data[0];
      //console.log(response);
      const formatData = {
        background_image:
          baseUrl + response.attributes.banner.data.attributes.url,
        title: response.attributes.title,
        sidebar_image: "/hero-sidebar.png",
      };
      result = {
        status: true,
        message: "Success",
        data: formatData,
      };
    } else {
      throw new Error("Invalid");
    }
  } catch (error) {
    result = {
      status: false,
      message: "Error",
      data: {},
    };
  }
  return result;
};

// Page list
export const Pages = async () => {
  let result;
  try {
    const url = new URL("/api/pages", baseUrl);
    url.search = pagesQuery;
    const res = await fetch(url.href, { cache: "no-store" });
    const resdata = await res.json();
    let formatData: any = [];
    let about: any = [];
    let work: any = [];
    let service: any = [];
    let others: any = [];
    let menu: any = [];
    if (resdata.data.length > 0) {
      const response = resdata.data;
      response.map((item: any) => {
        if (item.attributes.tag === "about") {
          about.push(item);
        } else if (item.attributes.tag === "work") {
          work.push(item);
        } else if (item.attributes.tag === "service") {
          service.push(item);
        } else {
          others.push(item);
        }
        if (item.attributes.isMenu) {
          menu.push({
            title: item.attributes.tag,
            slug: item.attributes.slug,
          });
        }
      });
      formatData.push({
        about: about,
        work: work,
        service: service,
        others: others,
        menu: menu,
      });
      result = {
        status: true,
        message: "Success",
        data: formatData,
      };
    } else {
      throw new Error("Invalid");
    }
  } catch (error) {
    result = {
      status: false,
      message: "Error",
      data: {},
    };
  }
  return result;
};
// Page list
export const Testimonial = async () => {
  let result;
  try {
    const url = new URL("/api/testimonials", baseUrl);
    const res = await fetch(url.href, { cache: "no-store" });
    const resdata = await res.json();
    let formatData: any = [];
    if (resdata.data.length > 0) {
      const response = resdata.data;
      //console.log(response);
      response.map((item: any) => {
        formatData["user_name"] = item.user_name;
        formatData["user_occupation"] = item.user_occupation;
        formatData["company"] = item.company;
        formatData["message"] = item.message;
      });
      result = {
        status: true,
        message: "Success",
        data: formatData,
      };
    } else {
      throw new Error("Invalid");
    }
  } catch (error) {
    result = {
      status: false,
      message: "Error",
      data: [],
    };
  }
  return result;
};
