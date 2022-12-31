import React from "react";

// import copyright data
import { copyrightData } from "../data";

const Copyright = () => {
  // destructure copyright data
  const { text, icon } = copyrightData;
  return (
    <section className="mt-24 pb-12" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* text */}
          <div className="text-center text-2xl font-light max-w-[360px]">{text}</div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
