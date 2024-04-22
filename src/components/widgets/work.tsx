import Image from "next/image";
import { Button } from "../ui/button";

export const Work = () => {
  return (
    <section className="w-full">
      <div className=" container mx-auto max-w-5xl px-4 justify-evenly sm:px-6 lg:px-8 relative text-left py-4">
        <div className="max-w-xl">
          <h1 className="font-bold text-4xl">
            <span className=" uppercase">Our</span>
            <br />
            <span className=" italic text-[#EE14C0] ml-3">Favorite work</span>
          </h1>
          <p className="py-4 text-sm text-gray-500 text-justify">
            We could point out the hard work and creativity that went into each
            of these projects. But we’d rather let the work speak for itself.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 py-4">
        <div className="">
          <Image
            src="/assets/work/work-1.png"
            width={400}
            height={400}
            alt="Logo image"
          />
        </div>
        <div className="">
          <Image
            src="/assets/work/work-2.png"
            width={400}
            height={400}
            alt="Logo image"
          />
        </div>
        <div className="">
          <Image
            src="/assets/work/work-3.png"
            width={400}
            height={400}
            alt="Logo image"
          />
        </div>
        <div className="">
          <Image
            src="/assets/work/work-4.png"
            width={400}
            height={400}
            alt="Logo image"
          />
        </div>
        <div className="">
          <Image
            src="/assets/work/work-5.png"
            width={400}
            height={400}
            alt="Logo image"
          />
        </div>
        <div className="">
          <Image
            src="/assets/work/work-6.png"
            width={400}
            height={400}
            alt="Logo image"
          />
        </div>
        <div className="">
          <Image
            src="/assets/work/work-7.png"
            width={400}
            height={400}
            alt="Logo image"
          />
        </div>
        <div className="">
          <Image
            src="/assets/work/work-8.png"
            width={400}
            height={400}
            alt="Logo image"
          />
        </div>
      </div>
    </section>
  );
};
