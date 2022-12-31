import React from "react";
import AbiTuru from "../assets/img/AbiTuru.svg";
// import features data
import { featuresData } from "../data";

// import icons
import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  // destructure features data
  const { title, subtitle, list } = featuresData;
  return (
    <section className=" bg-langitbening">
      <div className="container mx-auto mt-8">
        {/* text */}
        <div className="grid grid-rows-1 grid-cols-3">
          <div className="object-left" data-aos="fade-down" data-aos-delay="100">
            <img src={AbiTuru} />
          </div>
          <div className="col-span-2 text-center mt-16">
            <h2 className="xl:mb-12 top-10" data-aos="fade-down" data-aos-delay="100">
              <a>
                <h1>
                  Mengapa kamu akan senang belajar di Teman<b>Dengar</b>
                </h1>
              </a>
            </h2>
          </div>
        </div>
        {/* feature list */}
        <div className="grid grid-cols-3 gap-[50px] xl:grid-cols-3 pt-10">
          {list.map((feature, index) => {
            // destructure feature
            const { image, bgImage, title, description, linkText, delay } = feature;
            // feature item
            return (
              <div key={index} className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto" data-aos="zoom-in" data-aos-offset="100" data-aos-delay={delay}>
                {/* bg image */}
                <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                  <img src={bgImage} />
                </div>

                {/* icon image */}
                <div className="max-w-[120px] xl:mr-7 xl:max-w-[232px]" data-aos="zoom-in-right" data-aos-delay={delay}>
                  <img src={image} />
                </div>
                {/* text */}
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-8">{title}</h3>
                  <p className="mb-4 pb-8">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
