import Image from "next/image";
import { Button } from "../ui/button";

export const About = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-left py-12">
      <div className="flex flex-row pt-5 mx-auto px-6 justify-evenly">
        <div className="flex-none w-64">
          <h1 className="font-bold text-4xl">
            <span className=" italic text-[#EE14C0] ml-3">Pounce</span>{" "}
            <span className=" uppercase">Marketing</span>
          </h1>
          <p className="py-4 text-sm text-gray-500">
            We’re the strategic minds, the creative hearts, and the
            technological hands that allow your brand to stare down challenges
            with defiance.
          </p>
          <p className="py-4 text-sm text-gray-500">
            Step forward with confidence and boldly scale the peaks that had
            previously been horizons.
          </p>
          <div className="">
            <Button>UNLEASH YOUR MARKETING</Button>
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/images/about.png"
            width={500}
            height={500}
            alt="Logo image"
          />
        </div>
      </div>
    </section>
  );
};
