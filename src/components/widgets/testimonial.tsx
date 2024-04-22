import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonial = () => {
  return (
    <section className="relative h-[1080px] overflow-hidden">
      <Image
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
        height={1080}
        src="/testimonial-bg.png"
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
        width={1920}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center py-28">
        <div className="flex flex-col pt-5 mx-auto px-10 justify-evenly">
          <h1 className="font-bold text-4xl text-white uppercase">
            TESTIMONIALS
          </h1>
          <div className="mx-auto max-w-xl -mt-32">
            <Carousel className="">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div>
                        <div className="flex aspect-square items-center justify-center p-6">
                          <span className=" text-sm">
                            <p className="text-md text-gray-400">
                              “Pounce Marketing was exactly what we needed.
                              Forcing us to really refocus on our approach to
                              customer engagement. They were fun to work with,
                              innovative, and aggressive champions for our
                              success.”{" "}
                            </p>
                            <p className="py-4 text-xl font-semibold text-gray-300">
                              John Sirianni President & CEO, Statseeker{" "}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="mx-auto pt-28">
            <h2 className="text-6xl text-white italic font-semibold">
              We’re Ready.
              <br />
              <span>Are you?</span>
            </h2>
            <div className="py-6 px-2">
                <Button variant="secondary">LETS DO IT</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
