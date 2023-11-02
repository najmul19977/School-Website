import React from "react";
import img1 from "../assets/Image/parents-1.jpg";

const Parents = () => {
  return (
    <div className="mt-20 mb-20">
      <h1 className="text-5xl font-bold mb-20" data-aos="fade-up" >
        What Parents Says About Us
      </h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="md:grid grid-cols-2 px-10">
            <div className="">
              <img className="w-96 rounded-xl image-zoom"data-aos="fade-left" src={img1} alt="" />
            </div>
            <div>
              <p className="text-justify" data-aos="fade-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                enim suscipit ad distinctio, autem voluptates dolorum deleniti,
                eum similique magnam repellat, nam laborum voluptate
                exercitationem assumenda consequuntur fuga perferendis ab. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                libero rerum cumque itaque eum. Sed quidem corporis, vel placeat
                ullam unde eum maxime impedit facere dolor. Corrupti
                necessitatibus incidunt deleniti. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Provident, recusandae placeat
                rerum dolore qui voluptatem architecto magnam quos ut tenetur,
                praesentium unde laboriosam amet distinctio minus voluptates
                nulla esse vitae!
              </p>
              <p className="text-xl font-bold mt-5 text-left" data-aos="fade-up">Parents</p>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="md:grid grid-cols-2 px-10">
            <div className="">
              <img className="w-96 rounded-xl image-zoom" src={img1} alt="" />
            </div>
            <div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                enim suscipit ad distinctio, autem voluptates dolorum deleniti,
                eum similique magnam repellat, nam laborum voluptate
                exercitationem assumenda consequuntur fuga perferendis ab. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                libero rerum cumque itaque eum. Sed quidem corporis, vel placeat
                ullam unde eum maxime impedit facere dolor. Corrupti
                necessitatibus incidunt deleniti. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Provident, recusandae placeat
                rerum dolore qui voluptatem architecto magnam quos ut tenetur,
                praesentium unde laboriosam amet distinctio minus voluptates
                nulla esse vitae!
              </p>
              <p className="text-xl font-bold mt-5 text-left">Parents</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="md:grid grid-cols-2 px-10">
            <div className="">
              <img className="w-96 rounded-xl image-zoom" src={img1} alt="" />
            </div>
            <div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                enim suscipit ad distinctio, autem voluptates dolorum deleniti,
                eum similique magnam repellat, nam laborum voluptate
                exercitationem assumenda consequuntur fuga perferendis ab. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                libero rerum cumque itaque eum. Sed quidem corporis, vel placeat
                ullam unde eum maxime impedit facere dolor. Corrupti
                necessitatibus incidunt deleniti. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Provident, recusandae placeat
                rerum dolore qui voluptatem architecto magnam quos ut tenetur,
                praesentium unde laboriosam amet distinctio minus voluptates
                nulla esse vitae!
              </p>
              <p className="text-xl font-bold mt-5 text-left">Parents</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="md:grid grid-cols-2 px-10">
            <div className="">
              <img className="w-96 rounded-xl image-zoom" src={img1} alt="" />
            </div>
            <div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                enim suscipit ad distinctio, autem voluptates dolorum deleniti,
                eum similique magnam repellat, nam laborum voluptate
                exercitationem assumenda consequuntur fuga perferendis ab. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                libero rerum cumque itaque eum. Sed quidem corporis, vel placeat
                ullam unde eum maxime impedit facere dolor. Corrupti
                necessitatibus incidunt deleniti. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Provident, recusandae placeat
                rerum dolore qui voluptatem architecto magnam quos ut tenetur,
                praesentium unde laboriosam amet distinctio minus voluptates
                nulla esse vitae!
              </p>
              <p className="text-xl font-bold mt-5 text-left">Parents</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parents;
