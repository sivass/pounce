import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 lg:pt-32 bg-[url('http://localhost:3000/hero-background.jpg')] bg-center bg-cover">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="flex flex-row pt-5 mx-auto px-10 justify-evenly">
          <div className="">
            <h1 className="max-w-10 text-white text-6xl font-semibold fixed pt-14">
              UNLEASH YOUR MARKETING
            </h1>
          </div>
          <div className="">
            <Image
              src="/hero-sidebar.png"
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
    </section>
  );
};
