import Image from "next/image";
import { Button } from "../ui/button";

export const Service = () => {
  return (
    <section className="container mx-auto max-w-6xl px-6 sm:px-6 lg:px-8 relative text-left py-12">
      <div className="flex flex-row pt-5 mx-auto px-8 justify-evenly py-6">
        <div className="w-1/2">
          <h1 className="font-bold text-4xl">
            <span className=" italic text-[#EE14C0]">Our</span>{" "}
            <span className=" uppercase">Services</span>
          </h1>
          <p className="py-4 text-sm text-gray-500">
            We are not just creatives. We are conduits. We digest our networks,
            our cultures, our experiences. We distill them. And we produce
            potent, creative solutions for your business that encompass
            everything we are.
          </p>

          <p className="py-4 text-sm text-gray-500">
            Every job we take involves some, or all, of the following: Discover,
            Deliver, and Drive.
          </p>

          <p className="py-4 text-sm text-gray-500">
            Put simply, we take the time to discover your current state and
            create a strategic roadmap for you. We can deliver any creative
            concepts and develop any technical solutions needed, broadly
            categorized into creative, marketing, and technology. Once all the
            moving parts have been put together, we like to stick around and
            take it for a drive. That is, we like to make sure it’s all working
            smoothly, adjust the course if needed, and optimize some more.
          </p>

          <p className="py-4 text-sm text-gray-500">
            Engage us for one option or all three, the choice is yours.
          </p>
          <div className="">
            <Button>UNLEASH YOUR MARKETING</Button>
          </div>
        </div>
        <div className="w-1/2 px-8 py-8">
          <div className="grid grid-cols-6 gap-2 px-9 mx-auto">
            <div className="text-center col-start-1 col-end-3">
              <Image
                src="/assets/service/service-1.png"
                width={120}
                height={120}
                alt="Logo image"
              />
              <span className="py-4  text-2xl">Creative</span>
            </div>
            <div className="text-center col-end-7 col-span-2">
              <Image
                src="/assets/service/service-2.png"
                width={120}
                height={120}
                alt="Logo image"
              />
              <span className="py-4  text-2xl ">Marketing</span>
            </div>
            <div className="col-start-2 col-span-4 text-center mx-auto">
              <Image
                src="/assets/service/service-3.png"
                width={120}
                height={120}
                alt="Logo image"
              />
              <span className="py-4  text-2xl">Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
