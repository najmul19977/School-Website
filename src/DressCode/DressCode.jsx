import React from "react";
import img1 from "../assets/Image/dress-1.webp";
import img2 from "../assets/Image/dress-2.webp";

const DressCode = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" data-aos="fade-up-right">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Boys Dress Code</h1>
            <p className="py-6  text-left text-xl font-semibold">
              Shirt – Striped Shirt (light purple and white); <br /> collar &
              cop-white, Button-purple(thin) <br /> Style- Smart Fitting With
              DIS logo <br />
              Shorts – Navy Blue (Oxford) <br /> Belt – Black(Plane) <br />{" "}
              Socks – White(Plane) <br /> Shoes – White Keds(Bata) Tie-DIS
              designed tie <br /> Logo- On Pocket <br /> Sweater – Purple
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200" data-aos="fade-up-left">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Girls Dress Code</h1>
            <p className="py-6 text-left ml-10 text-xl font-semibold">
              For Pre Section & Junior Section: <br />
              Shirt – Striped Shirt (light purple and white); collar &
              cop-white, Button-purple(thin) <br />
              Skirt – Navy Blue(Oxford) <br />
              For Senior Section: <br />
              Kamiz – Striped(light purple and white); collar & cop-white,
              Button-purple(thin) <br />
              Shalwar – Navy Blue(Oxford, pant style) <br />
              Dopatta – Navy Blue(Oxford) <br />
              Belt – White (Cloth)
            </p>
           
          </div>
          <img src={img2} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default DressCode;
