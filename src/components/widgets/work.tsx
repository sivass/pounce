import Image from "next/image";
import { Button } from "../ui/button";

export const Work = (work: any) => {
  const baseUrl = process.env.STRAPI_PUBLIC_URL || `http://localhost:1337`;
  const workArray = Object.keys(work).map((key) => {
    return { key: key, value: work[key] };
  });
  console.log(workArray);
  const title = workArray ? workArray[0].value.attributes.title.split(" ") : "";
  const description = workArray ? workArray[0].value.attributes.short_description : "";
  return (
    <section className="w-full">
      <div className=" container mx-auto max-w-5xl px-4 justify-evenly sm:px-6 lg:px-8 relative text-left py-4">
        <div className="max-w-xl">
          <h1 className="font-bold text-4xl">
            <span className=" uppercase">{title[0]}</span>
            <br />
            <span className=" italic text-[#EE14C0] ml-3">
              {title[1]} {title[2]}
            </span>
          </h1>
          <p className="py-4 text-sm text-gray-500 text-justify">
            {description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 py-4">
        {workArray &&
          workArray.map((item) => {
            return (
              !item.value.attributes.isMenu && (
                <div key={item.key} className="">
                  <Image
                    src={
                      baseUrl + item.value.attributes.image.data.attributes.url
                    }
                    width={400}
                    height={400}
                    alt="Logo image"
                  />
                </div>
              )
            );
          })}
        {/* <div className="">
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
        </div> */}
      </div>
    </section>
  );
};
