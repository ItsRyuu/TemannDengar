import React from "react";

// import components
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="relative bg-langitbening">
      <div className="container-fluid mx-auto">
        <div>
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px]">
            <h2 className="h2 text-black text-center mb-[80px]">Testimonials</h2>
            <TestimonialSlider />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#88CCF1" fill-opacity="1" d="M0,192L26.7,176C53.3,160,107,128,160,101.3C213.3,75,267,53,320,64C373.3,75,427,117,480,138.7C533.3,160,587,160,640,149.3C693.3,139,747,117,800,101.3C853.3,85,907,75,960,64C1013.3,53,1067,43,1120,64C1173.3,85,1227,139,1280,144C1333.3,149,1387,107,1413,85.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        <path
          fill="#7BBCDF"
          fill-opacity="1"
          d="M0,32L48,74.7C96,117,192,203,288,202.7C384,203,480,117,576,80C672,43,768,53,864,85.3C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Testimonials;
