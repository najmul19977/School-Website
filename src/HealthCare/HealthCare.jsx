import React from "react";
import img1 from "../assets/Image/helth-2.webp";
import img2 from "../assets/Image/health-1.webp";
import './healthCare.css';

const HealthCare = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="health md:flex flex-row justify-between m-10 gap-5 items-center">
        <div className="w-full" data-aos="fade-right">
          <p className="text-justify text-xl font-semibold  ">
            DIS is equipped with first aid boxes for minor injuries but there is
            also medical support in case of major issues of the students from
            the efficient doctors of Daffodil International University which is
            located nearby our campus. If a child becomes sick in school,
            initial medical care is provided free of charge. When necessary,
            class teacher or admin office makes home calls to maintain full and
            complete communication with parents and guardians, over telephone or
            face to face in person, so that all can work together for the very
            best interests of the children.
          </p>
        </div>
        <div className=""data-aos="fade-left">
          <img className="w-96  rounded-2xl "  src={img1} alt="" />
        </div>
      </div>
      <div className="md:flex flex-row justify-between m-10 gap-5 items-center mt-20 ">
        <div data-aos="fade-left">
          <img className="w-96 h-96  rounded-2xl " src={img2} alt="" />
        </div>
        <div className="w-full" data-aos="fade-right">
          <p className="text-justify text-xl font-semibold">
            In addition to responding to accidents or sickness in today's age,
            there is an increasing importance given to preventive
            healthcare-ensuring that children grow up fit and healthy. The
            school takes a number of initiatives throughout the year with this
            very concern in mind. From time to time, there is liaison with the
            medical team of the Daffodil International University for
            inoculation programmes. In addition, on a regular basis all children
            undergo a routine medical check-up. This is an opportunity to check
            that all vaccinations are up-to-date, height and weight are
            progressing appropriately and that in all respects, the child is
            maintaining good health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
