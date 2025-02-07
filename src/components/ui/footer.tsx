import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export const Footer = (menu: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuValue = Object.keys(menu).map((key) => {
    return { key: key, value: menu[key] };
  });
  const [message, setMessage]: any = useState("");
  const subscribeUser = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const resData = await res.json();
    if (resData.status) {
      //console.log(resData.message);
      inputRef.current?.value;
      setMessage(resData);
    } else {
      //console.log(resData.message);
      setMessage(resData);
    }
  };
  return (
    <div className="w-full h-full dark bg-gray-950 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center py-28">
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <div className="pb-2">
              <Image
                src={menu.logo_url}
                width={100}
                height={40}
                alt="Logo image"
                className=" cursor-pointer"
              />
            </div>
          </div>
          <div className="">
            <p className="text-left font-bold pb-2 text-2xl">Company</p>
            <ul className="text-left text-gray-400">
              {menuValue &&
                menuValue.map((item) => {
                  return (
                    <li key={item.key} className=" capitalize">
                      {item.value.title}
                    </li>
                  );
                })}
              {/* <li>Services</li>
              <li>About us</li>
              <li>Our work</li>
              <li>Blog</li>
              <li>Contact us</li> */}
            </ul>
          </div>
          <div className="">
            <p className="text-left font-bold pb-2 text-2xl">Stalk Us</p>
            <div className="flex gap-2">
              <div className="">
                <a href={menu.fb_link}>
                  <Image
                    src="/assets/icons/Facebook.png"
                    width={32}
                    height={32}
                    alt="Search"
                    className=" cursor-pointer"
                  />
                </a>
              </div>
              <div className="">
                <a href={menu.instagram_link}>
                  {" "}
                  <Image
                    src="/assets/icons/Instagram.png"
                    width={32}
                    height={32}
                    alt="Search"
                    className=" cursor-pointer"
                  />
                </a>
              </div>
              <div className="">
                <a href={menu.linkedin_link}>
                  {" "}
                  <Image
                    src="/assets/icons/LinkedIn.png"
                    width={32}
                    height={32}
                    alt="Search"
                    className=" cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-left font-bold pb-2 text-2xl">Stay in touch</p>
            <div className="">
              <p className="text-left text-sm font-normal text-gray-400">
                {menu.description}
              </p>
              <form onSubmit={subscribeUser}>
                <div className="flex gap-2 py-6">
                  <div className="">
                    <input
                      className=" border border-gray-400 h-fit px-2 py-2 bg-black"
                      type="email"
                      placeholder="Email"
                      ref={inputRef}
                      required
                    />
                  </div>
                  <div className="">
                    <Button>GET AMONGST IT</Button>
                  </div>
                </div>
                {message && (
                  <div className="flex">
                    <p
                      className={
                        message.status ? "text-green-500" : " text-red-500"
                      }
                    >
                      {message.message}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
