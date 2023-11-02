import React from "react";
import img from "../assets/Image/oath.webp";

const StudentsOath = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse"data-aos="fade-left">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div data-aos="fade-right">
            <h1 className="text-5xl font-bold">Students Oath</h1>
            <p className="py-6 text-left gap-5">
              We take the oath thatwe will serve mankind <br />
              and be devoted to our country. <br />
              We will maintain <br />
              the rules and regulations <br />
              of our school. <br />
              Almighty Allah, gives us power, <br />
              so that we can <br />
              make it a powerful state.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsOath;
