import React from "react";

import ImageListItem from "@mui/material/ImageListItem";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const itemData = [
    {
      img: "https://i.ibb.co/8stG7zF/pexels-pavel-danilyuk-8422142.jpg",
      title: "Bed",
    },
    {
      img: "https://i.ibb.co/Fbtsw6f/pexels-pavel-danilyuk-8422105.jpg",
      title: "Books",
    },
    {
      img: "https://i.ibb.co/VVPkC3x/pexels-agung-pandit-wiguna-3401403.jpg",
      title: "Sink",
    },
    {
      img: "https://i.ibb.co/2YFs7xK/pexels-pavel-danilyuk-8422104.jpg",
      title: "Kitchen",
    },
    {
      img: "https://i.ibb.co/8cvRBX1/pexels-rdne-stock-project-8364026.jpg",
      title: "Blinds",
    },
    {
      img: "https://i.ibb.co/NSyDSyq/pexels-ksenia-chernaya-8535230.jpg",
      title: "Chairs",
    },
  ];
  return (
    <div>
        <h1 className="text-center text-5xl font-bold mt-10 mb-20" data-aos="fade-up" >Photo Gallery</h1>
      <div className="md:grid grid-cols-3 gap-5" data-aos="fade-down" >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              className="image-zoom"
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
